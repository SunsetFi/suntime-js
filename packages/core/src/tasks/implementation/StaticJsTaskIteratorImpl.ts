import type { Node } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { StaticJsTaskAbortedError } from "../../errors/StaticJsTaskAbortedError.js";
import { StaticJsTaskCompletedError } from "../../errors/StaticJsTaskCompletedError.js";
import { evaluateCommands } from "../../evaluator/evaluate-commands.js";
import {
  EvaluationContext,
  type EvaluationContextStackProvider,
} from "../../evaluator/EvaluationContext.js";
import { invokeEvaluator, type StaticJsEvaluator } from "../../evaluator/StaticJsEvaluator.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsFunctionEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import { StaticJsGlobalEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import { StaticJsModuleEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsModuleEnvironmentRecord.js";
import { StaticJsObjectEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsObjectEnvironmentRecord.js";
import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { StaticJsAbstractFunction } from "../../runtime/types/implementation/functions/StaticJsAbstractFunction.js";
import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { StaticJsRunTaskOptions } from "../StaticJsRunTaskOptions.js";
import type { StaticJsTaskCalleeType } from "../StaticJsTaskCalleeType.js";
import type { StaticJsTaskIterator } from "../StaticJsTaskIterator.js";
import type { StaticJsTaskIteratorOperation } from "../StaticJsTaskIteratorOperation.js";
import type { StaticJsTaskIteratorStackFrame } from "../StaticJsTaskIteratorStackFrame.js";
import type {
  StaticJsTaskScopeFrame,
  StaticJsTaskScopeFrameType,
  StaticJsTaskScopeVariable,
} from "../StaticJsTaskScopeFrame.js";
import type { StaticJsTaskSourceLocation } from "../StaticJsTaskSourceLocation.js";
import type { StaticJsTaskType } from "../StaticJsTaskType.js";

export interface StaticJsIteratedTask {
  type: StaticJsTaskType;
  evaluator: StaticJsEvaluator<unknown>;
  accept: (value: unknown) => void;
  reject: (reason: unknown) => void;
}

type StaticJsTaskIteratorImplState = "running" | "done" | "aborted";

const Unset = Symbol("Unset");

interface CapturedStackFrame {
  currentNode: Node | null;
  function: StaticJsFunction | null;
}

export class StaticJsTaskIteratorImpl implements StaticJsTaskIterator {
  private _state: StaticJsTaskIteratorImplState;

  private _currentTask: StaticJsIteratedTask | null = null;
  private _currentTaskId: number = 0;
  private _currentEvaluator: Generator<void, unknown, void> | null = null;

  private readonly _frames: CapturedStackFrame[] = [];
  private _currentNode: Node | null = null;

  constructor(
    private readonly _calleeType: StaticJsTaskCalleeType,
    private readonly _async: boolean,
    private readonly _taskIterator: Iterator<StaticJsIteratedTask>,
    private readonly _stackProvider: EvaluationContextStackProvider,
  ) {
    // We start in the running state, so the values of the current operation are
    // populated immediately.
    this._nextTask();
    this._state = "running";
  }

  get calleeType(): StaticJsTaskCalleeType {
    return this._calleeType;
  }

  get async() {
    return this._async;
  }

  get currentTaskType(): StaticJsTaskType | null {
    return this._currentTask ? this._currentTask.type : null;
  }

  get currentTaskId(): string | null {
    if (this._currentTaskId === -1) {
      return null;
    }
    return String(this._currentTaskId);
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
      operationType: node.type,
    };
  }

  get location(): StaticJsTaskSourceLocation | null {
    const node = this._currentNode;
    if (!node) {
      return null;
    }

    return captureLocation(node);
  }

  get stack(): readonly StaticJsTaskIteratorStackFrame[] {
    return this._captureStackFrames();
  }

  get scopes(): readonly StaticJsTaskScopeFrame[] {
    return this._captureScopeFrames();
  }

  next() {
    this._prepareTick();

    if (!this._currentTask) {
      return { done: true, value: undefined };
    }
    return this._tick();
  }

  throw(error: unknown) {
    this._prepareTick();

    if (!this._currentTask) {
      throw error;
    }

    return this._tick(error);
  }

  abort(err?: unknown): void {
    if (this._state === "aborted") {
      return;
    }

    if (this._state === "done") {
      throw new StaticJsEngineError("Cannot call abort() on a completed task");
    }

    if (typeof err === "string") {
      err = new StaticJsTaskAbortedError(err);
    }

    this._reject(err ?? new StaticJsTaskAbortedError("Task was aborted"));
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
      throw new StaticJsTaskCompletedError("Cannot iterate a completed task");
    }

    if (this._state === "aborted") {
      throw new StaticJsTaskAbortedError("Cannot iterate an aborted task");
    }
  }

  private _tick(err: unknown = Unset): IteratorResult<void, void> {
    // This can be changed and reset by _processIterResult
    if (!this._currentEvaluator) {
      this._currentEvaluator = this._createEvaluatorFromTask(this._currentTask!);
    }

    return EvaluationContext.withStackProvider(this._stackProvider, () => {
      let result: IteratorResult<void, unknown>;
      try {
        if (err !== Unset) {
          result = this._currentEvaluator!.throw(err);
        } else {
          result = this._currentEvaluator!.next();
        }
      } catch (e) {
        this._reject(e);
        return { done: true, value: undefined };
      }

      const { done, value } = result;
      if (done) {
        this._acceptCurrentTask(value);

        if (!this._nextTask()) {
          this._state = "done";
          return { done: true, value: undefined };
        }
      }

      return {
        done: false,
        value: undefined,
      };
    });
  }

  private _nextTask() {
    this._currentEvaluator = null;
    this._currentNode = null;
    this._frames.length = 0;

    const { value, done } = this._taskIterator.next();
    if (done) {
      this._currentTask = null;
      this._currentTaskId = -1;
      return false;
    }

    this._currentTask = value;
    this._currentTaskId++;

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
      throw new AggregateError([new StaticJsEngineError("No current task to reject"), reason]);
    }

    const { reject } = this._currentTask;
    reject(reason);

    this._state = "aborted";

    this._frames.length = 0;
    this._currentNode = null;
    this._currentTask = null;
    this._currentEvaluator = null;
    this._currentTaskId = -1;
  }

  private _captureStackFrames(): readonly StaticJsTaskIteratorStackFrame[] {
    const frameLength = this._frames.length;
    return this._frames.map((frame, index) => frameToIteratorFrame(frame, frameLength - index));
  }

  private _captureScopeFrames(): readonly StaticJsTaskScopeFrame[] {
    const context = this._stackProvider.getCurrentContext();
    if (!context) {
      return [];
    }

    const frames: StaticJsTaskScopeFrame[] = [];
    let currentEnv: StaticJsEnvironmentRecord | null = context.lexicalEnv;
    while (currentEnv) {
      const frame = environmentRecordToTaskScopeFrame(currentEnv, context);
      frames.push(frame);
      currentEnv = currentEnv.outerEnv ?? null;
    }
    return frames;
  }
}

function frameToIteratorFrame(
  frame: CapturedStackFrame,
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

function environmentRecordToTaskScopeFrame(
  env: StaticJsEnvironmentRecord,
  context: EvaluationContext,
): StaticJsTaskScopeFrame {
  let name: string;
  let type: StaticJsTaskScopeFrameType;

  if (env instanceof StaticJsFunctionEnvironmentRecord) {
    name = env.functionObject.initialName ?? "<anonymous>";
    type = "function";
  } else if (env instanceof StaticJsDeclarativeEnvironmentRecord) {
    name = "Block";
    type = "block";
  } else if (env instanceof StaticJsObjectEnvironmentRecord) {
    name = "Object";
    type = "block";
  } else if (env instanceof StaticJsGlobalEnvironmentRecord) {
    name = "Global";
    type = "global";
  } else if (env instanceof StaticJsModuleEnvironmentRecord) {
    if (context.scriptOrModule?.type === "module") {
      const moduleName = context.scriptOrModule.module.name;
      name = `${moduleName} [module]`;
    } else {
      name = "<module>";
    }
    type = "module";
  } else {
    throw new StaticJsEngineError(`Unknown environment record type: ${env.constructor.name}`);
  }

  function getVariables(opts?: StaticJsRunTaskOptions): StaticJsTaskScopeVariable[] {
    const bindings = context.realm.invokeEvaluatorSync(() => env.inspectBindingsEvaluator(), opts);
    const results: StaticJsTaskScopeVariable[] = [];
    for (const [name, value] of Object.entries(bindings)) {
      results.push({ name, value });
    }
    return results;
  }

  return {
    name,
    type,
    getVariables,
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
