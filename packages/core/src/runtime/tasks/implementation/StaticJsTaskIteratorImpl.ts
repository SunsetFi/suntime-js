import type { Node } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";
import { invokeEvaluator, StaticJsEvaluator } from "../../../evaluator/StaticJsEvaluator.js";

import { StaticJsFunction } from "../../types/StaticJsFunction.js";
import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";

import { StaticJsTaskIterator } from "../StaticJsTaskIterator.js";
import { StaticJsTaskIteratorOperation } from "../StaticJsTaskIteratorOperation.js";
import { StaticJsTaskIteratorStackFrame } from "../StaticJsTaskIteratorStackFrame.js";
import { StaticJsTaskType } from "../StaticJsTaskType.js";
import { StaticJsTaskSourceLocation } from "../StaticJsTaskSourceLocation.js";
import StaticJsTaskAbortedError from "../../../errors/StaticJsTaskAbortedError.js";

interface TaskIteratorFrame {
  currentNode: Node | null;
  function: StaticJsFunction | null;
}

const MaxDeadIteratorLoopCount = 100;

const Unset = Symbol("Unset");

export default class StaticJsTaskIteratorImpl<TReturn> implements StaticJsTaskIterator {
  private _state: "pending" | "running" | "done" | "aborted" = "pending";

  private _innerIterator: Generator<void, TReturn, void> | null = null;

  private readonly _frames: TaskIteratorFrame[] = [];

  constructor(
    public readonly type: StaticJsTaskType,
    private readonly _evaluator: StaticJsEvaluator<TReturn>,
    private readonly _scope: (callback: () => void) => void,
    private readonly _accept: (value: TReturn) => void,
    private readonly _reject: (reason: unknown) => void,
  ) {}

  get done(): boolean {
    return this._state === "done" || this._state === "aborted";
  }

  get aborted(): boolean {
    return this._state === "aborted";
  }

  get operation(): StaticJsTaskIteratorOperation | null {
    const frame = this._frames[0];
    if (!frame) {
      return null;
    }

    const node = frame.currentNode;
    if (!node) {
      return null;
    }

    return {
      location: captureLocation(node),
      operationType: node.type,
    };
  }

  get stack(): readonly StaticJsTaskIteratorStackFrame[] {
    const frameLength = this._frames.length;
    return this._frames.map((frame, index) => frameToIteratorFrame(frame, frameLength - index));
  }

  next(): IteratorResult<void, void> {
    return this._next();
  }

  throw(error: unknown): IteratorResult<void, void> {
    return this._next(error);
  }

  abort(): void {
    if (this._state === "aborted") {
      return;
    }

    if (this._state === "done") {
      throw new StaticJsEngineError("Cannot call abort() on a completed task");
    }

    this._doneAbort();
  }

  private _next(err?: unknown): IteratorResult<void, void> {
    if (this._state === "done") {
      throw new StaticJsEngineError("Cannot call next() on a completed task");
    }

    if (this._state === "aborted") {
      throw new StaticJsEngineError("Cannot call next() on an aborted task");
    }

    if (this._state === "pending") {
      this._start();
    }

    let error: unknown = Unset;
    let value: TReturn | typeof Unset = Unset;
    try {
      this._scope(() => {
        const innerIterator = this._innerIterator!;
        let deadIteratorLoops = 0;
        while (true) {
          const result = err ? innerIterator.throw(err) : innerIterator.next();
          err = null;

          if (result.done) {
            value = result.value;
            return;
          }

          const topFrame = this._frames[0];
          if (topFrame && topFrame.currentNode) {
            // We stopped at another concrete node.
            return;
          }

          // We aren't stopped at an AST node.  Consume.

          if (++deadIteratorLoops > MaxDeadIteratorLoopCount) {
            throw new StaticJsEngineError(
              "Too many consecutive dead node iterations without yielding. Possible infinite loop in task.",
            );
          }

          continue;
        }
      });
    } catch (e) {
      error = e;
    }

    if (error !== Unset) {
      this._doneReject(error);
      return { done: true, value: undefined };
    } else if (value !== Unset) {
      this._doneAccept(value);
      return { done: true, value: undefined };
    } else {
      return { done: false, value: undefined };
    }
  }

  private _start() {
    if (this._state !== "pending") {
      throw new StaticJsEngineError("Task already started");
    }

    this._innerIterator = evaluateCommands(invokeEvaluator(this._evaluator), {
      onBeforeNode: (node) => {
        const lastFrame = this._frames[0];
        if (lastFrame) {
          lastFrame.currentNode = node;
        }
      },
      onAfterNode: () => {
        const lastFrame = this._frames[0];
        if (lastFrame) {
          lastFrame.currentNode = null;
        }
      },
      onFunctionEnter: (func) => {
        const funcNode = func instanceof StaticJsFunctionImpl ? func.ecmaScriptCode : null;
        this._frames.unshift({ currentNode: funcNode, function: func });
      },
      onFunctionExit: () => {
        this._frames.shift();
      },
    });

    this._frames.unshift({ currentNode: null, function: null });

    this._state = "running";
  }

  private _doneAccept(value: TReturn) {
    this._frames.length = 0;
    this._state = "done";
    this._accept(value);
  }

  private _doneReject(reason: unknown) {
    this._frames.length = 0;
    this._state = "done";
    this._reject(reason);
  }

  private _doneAbort() {
    this._frames.length = 0;
    this._state = "aborted";
    this._reject(new StaticJsTaskAbortedError("Task was aborted"));
  }
}

function frameToIteratorFrame(
  frame: TaskIteratorFrame,
  depth: number,
): StaticJsTaskIteratorStackFrame {
  const { function: func, currentNode } = frame;
  return {
    depth,
    function: func,
    get functionName() {
      if (!func) {
        return null;
      }

      return func.getNameSync();
    },
    get sourceLocation() {
      if (!currentNode) {
        return null;
      }

      return captureLocation(currentNode);
    },
  };
}

function captureLocation(node: Node): StaticJsTaskSourceLocation {
  const loc = node.loc;
  if (!loc) {
    throw new StaticJsEngineError("Encountered a babel parse node without location data.");
  }

  return Object.freeze({
    sourceName: loc.filename,
    line: loc.start.line,
    column: loc.start.column,
    character: loc.start.index,
  });
}
