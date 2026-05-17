import type { Node } from "@babel/types";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { StaticJsTaskAbortedError } from "../../../errors/StaticJsTaskAbortedError.js";
import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";
import { invokeEvaluator, StaticJsEvaluator } from "../../../evaluator/StaticJsEvaluator.js";
import { StaticJsAbstractFunction } from "../../types/implementation/functions/StaticJsAbstractFunction.js";
import { StaticJsFunction } from "../../types/StaticJsFunction.js";
import { StaticJsTaskCalleeType } from "../StaticJsTaskCalleeType.js";
import { StaticJsTaskIterator } from "../StaticJsTaskIterator.js";
import { StaticJsTaskIteratorOperation } from "../StaticJsTaskIteratorOperation.js";
import { StaticJsTaskIteratorStackFrame } from "../StaticJsTaskIteratorStackFrame.js";
import { StaticJsTaskSourceLocation } from "../StaticJsTaskSourceLocation.js";
import { StaticJsTaskType } from "../StaticJsTaskType.js";

interface TaskIteratorFrame {
  currentNode: Node | null;
  function: StaticJsFunction | null;
}

const MaxDeadIteratorLoopCount = 100;

export interface StaticJsIteratedTask {
  type: StaticJsTaskType;
  evaluator: StaticJsEvaluator<unknown>;
  accept: (value: unknown) => void;
  reject: (reason: unknown) => void;
}

type StaticJsTaskIteratorImplState = "pending" | "running" | "done" | "aborted";

export class StaticJsTaskIteratorImpl implements StaticJsTaskIterator {
  private _state: StaticJsTaskIteratorImplState = "pending";

  private _currentTask: StaticJsIteratedTask | null = null;
  private _currentEvaluator: Generator<void, unknown, void> | null = null;

  private readonly _frames: TaskIteratorFrame[] = [];
  private _currentNode: Node | null = null;

  private _resultError: unknown;

  constructor(
    private readonly _calleeType: StaticJsTaskCalleeType,
    private readonly _async: boolean,
    private readonly _taskIterator: Iterator<StaticJsIteratedTask>,
    private readonly _scope: (callback: () => void) => void,
  ) {
    // Was happening on first tick, but we want type to be populated to introspect the .next() call.
    this._start();
  }

  get type(): StaticJsTaskType | null {
    return this._currentTask ? this._currentTask.type : null;
  }

  get calleeType(): StaticJsTaskCalleeType {
    return this._calleeType;
  }

  get async() {
    return this._async;
  }

  get done(): boolean {
    return this._state === "done" || this._state === "aborted";
  }

  get aborted(): boolean {
    return this._state === "aborted";
  }

  get operation(): StaticJsTaskIteratorOperation | null {
    const node = this._currentNode;
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

  next() {
    this._verifyResultError();

    this._prepareTick();

    if (!this._currentTask) {
      return { done: true, value: undefined };
    }
    return this._tick("next");
  }

  throw(error: unknown) {
    this._verifyResultError();

    this._prepareTick();

    if (!this._currentTask) {
      throw error;
    }

    return this._tick("throw", error);
  }

  abort(): void {
    if (this._state === "aborted") {
      return;
    }

    if (this._state === "done") {
      throw new StaticJsEngineError("Cannot call abort() on a completed task");
    }

    this._reject(new StaticJsTaskAbortedError("Task was aborted"));
  }

  private _start() {
    if (this._state !== "pending") {
      throw new StaticJsEngineError("Task already started");
    }

    this._nextTask();

    this._state = "running";
  }

  private _verifyResultError() {
    if (this._resultError) {
      throw this._resultError;
    }
  }

  private _createEvaluatorFromTask(task: StaticJsIteratedTask): Generator<void, unknown, void> {
    return evaluateCommands(invokeEvaluator(task.evaluator), {
      onBeforeNode: (node) => {
        this._currentNode = node;
        const lastFrame = this._frames[0];
        if (lastFrame) {
          lastFrame.currentNode = node;
        }
      },
      onAfterNode: () => {
        this._currentNode = null;
        const lastFrame = this._frames[0];
        if (lastFrame) {
          lastFrame.currentNode = null;
        }
      },
      onFunctionEnter: (func) => {
        const funcNode = func instanceof StaticJsAbstractFunction ? func.ecmaScriptCode : null;
        this._frames.unshift({ currentNode: funcNode, function: func });
      },
      onFunctionExit: () => {
        this._frames.shift();
      },
    });
  }

  private _prepareTick() {
    if (this._state === "done") {
      throw new StaticJsEngineError("Cannot iterate a completed task");
    }

    if (this._state === "aborted") {
      throw new StaticJsEngineError("Cannot iterate an aborted task");
    }
  }

  private _tick(func: "next" | "return" | "throw", value?: unknown): IteratorResult<void, void> {
    this._scope(() => {
      let deadIteratorLoops = 0;
      while (true) {
        let result: IteratorResult<void, unknown>;
        try {
          // This can be changed and reset by _processIterResult
          if (!this._currentEvaluator) {
            this._currentEvaluator = this._createEvaluatorFromTask(this._currentTask!);
          }

          if (func === "next") {
            result = this._currentEvaluator.next();
          } else {
            result = this._currentEvaluator[func](value);
          }
        } catch (e) {
          this._reject(e);
          return;
        }

        const { done } = this._processIterResult(result);
        if (done) {
          break;
        }

        if (this._currentNode) {
          // We stopped at another concrete node.
          break;
        }

        // We aren't stopped at an AST node.  Consume.

        if (++deadIteratorLoops > MaxDeadIteratorLoopCount) {
          throw new StaticJsEngineError(
            "Too many consecutive empty node iterations without yielding. Possible infinite loop in task.",
          );
        }
      }
    });

    // State can change from the above.
    // Typescript does not know this.
    const state = this._state as StaticJsTaskIteratorImplState;
    const done = state === "done" || state === "aborted";

    return {
      done,
      value: undefined,
    };
  }

  private _processIterResult({
    done,
    value,
  }: IteratorResult<void, unknown>): IteratorResult<void, void> {
    if (done) {
      this._acceptCurrentTask(value);

      if (!this._nextTask()) {
        this._state = "done";
        return { done: true, value: undefined };
      }
    }

    return { done: false, value: undefined };
  }

  private _nextTask() {
    this._currentEvaluator = null;

    const { value, done } = this._taskIterator.next();
    if (done) {
      this._currentTask = null;
      return false;
    }

    this._currentTask = value;

    this._frames.length = 0;
    this._frames.unshift({ currentNode: null, function: null });

    return true;
  }

  private _acceptCurrentTask(value: unknown) {
    if (!this._currentTask) {
      throw new StaticJsEngineError("No current task to accept");
    }

    const { accept } = this._currentTask;
    accept(value);
  }

  private _reject(reason: unknown) {
    if (!this._currentTask) {
      throw new StaticJsEngineError("No current task to reject");
    }

    const { reject } = this._currentTask;
    reject(reason);

    this._resultError = reason;
    this._state = "aborted";

    this._frames.length = 0;
    this._currentNode = null;
    this._currentTask = null;
    this._currentEvaluator = null;
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
