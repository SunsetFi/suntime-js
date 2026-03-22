import type { Node } from "@babel/types";

import EvaluationContext, {
  EvaluationContextStackProvider,
} from "../../../evaluator/EvaluationContext.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";
import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import StaticJsTaskAbortedError from "../../../errors/StaticJsTaskAbortedError.js";
import StaticJsUnhandledRejectionError from "../../../errors/StaticJsUnhandledRejectionError.js";

import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";
import { invokeEvaluator, type StaticJsEvaluator } from "../../../evaluator/StaticJsEvaluator.js";

import type { StaticJsTaskIterator } from "../../tasks/StaticJsTaskIterator.js";
import type { StaticJsTaskSourceLocation } from "../../tasks/StaticJsTaskSourceLocation.js";
import type { StaticJsTaskIteratorOperation } from "../../tasks/StaticJsTaskIteratorOperation.js";
import type { StaticJsTaskRunner } from "../../tasks/StaticJsTaskRunner.js";
import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import type { StaticJsTaskIteratorStackFrame } from "../../tasks/StaticJsTaskIteratorStackFrame.js";
import type { StaticJsTaskType } from "../../tasks/StaticJsTaskType.js";

const MaxDeadIteratorLoopCount = 100;

export default class EvaluationTask implements EvaluationContextStackProvider {
  private _status: "pending" | "running" | "fulfilled" | "rejected" = "pending";

  /**
   * The microtasks that have been enqueued during this macrotask.
   * Evaluation of a microtask may enqueue further microtasks.
   */
  private readonly _microtasks: StaticJsEvaluator<void>[] = [];

  /**
   * The pending completion value from the macrotask.
   *
   * This needs to be stored separately before the promise completes as we may need to
   * invoke microtasks that themselves can throw and reject our promise.
   */
  private _macrotaskCompletionValue: unknown | undefined = undefined;

  /**
   * Errors that have been raised but not yet handled.
   *
   * If this is non-empty when the macrotask and all microtasks complete, the macrotask
   * will be rejected with the first error in the list.
   */
  private _uncaughtErrors: StaticJsValue[] = [];

  /**
   * Promise that resolves when the macrotask is complete.
   */
  private readonly _promise: Promise<unknown>;

  /**
   * Function to complete the task session.
   *
   * Do not call until all microtasks have been processed.
   */
  private _acceptPromise!: (value: unknown) => void;

  /**
   * Function to reject the task session.
   *
   * Do not call until all microtasks have been processed.
   */
  private _rejectPromise!: (reason?: unknown) => void;

  /**
   * We have synchronous code that wants to know when Macrotask completes,
   * and in those cases nothing is awaiting the promise.
   *
   * Suppress unhandled rejection warnings in those cases, as we will synchronously check for uncaught errors and reject the promise if needed.
   */
  private _promiseRejectSuppressed = false;

  /**
   * Callbacks to inform external systems when the task completes.
   * This isn't the same as the promise, as we need to run synchronous checks and cleanups
   * in the realm based on macrotask completion.
   */
  private _onCompletedCallbacks: ((value: unknown, err?: unknown) => void)[] = [];

  /**
   * Whether the task is currently evaluating code.
   */
  private _isEntered: boolean = false;

  /**
   * The stack of evaluation contexts for the currently executing code.
   */
  private _executionContextStack: EvaluationContext[] = [];

  /**
   * The current AST node being executed, if any.
   */
  private _currentNode: Node | null = null;

  constructor(
    private readonly _evaluator: StaticJsEvaluator<unknown>,
    private readonly _taskRunner: StaticJsTaskRunner,
    // This shouldn't be needed if this task stays in sync with the realm about whether it is running.
    private readonly _assertIsRunning: (task: EvaluationTask) => void,
  ) {
    this._promise = new Promise<unknown>((accept, reject) => {
      this._acceptPromise = accept;
      this._rejectPromise = reject;
    });
  }

  get taskRunner() {
    return this._taskRunner;
  }

  await() {
    return this._promise;
  }

  get entered() {
    return this._isEntered;
  }

  get done() {
    return this._status === "fulfilled" || this._status === "rejected";
  }

  pushContext(context: EvaluationContext): void {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot push to evaluation stack when task is not running.  Current status: ${this._status}`,
      );
    }

    this._executionContextStack.push(context);
  }

  popContext(): void {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot pop from evaluation stack when task is not running.  Current status: ${this._status}`,
      );
    }

    if (this._executionContextStack.length === 0) {
      throw new StaticJsEngineError("Cannot pop from an empty evaluation stack.");
    }

    this._executionContextStack.pop();
  }

  getCurrentContext(): EvaluationContext | null {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot get current evaluation context when task is not running.  Current status: ${this._status}`,
      );
    }

    return this._executionContextStack.at(-1) ?? null;
  }

  getContextStack(): readonly EvaluationContext[] {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot get evaluation stack when task is not running.  Current status: ${this._status}`,
      );
    }

    return this._executionContextStack;
  }

  onComplete(callback: (value: unknown, err?: unknown) => void) {
    this._onCompletedCallbacks.push(callback);
    this._trySuppressPromiseRejection();
  }

  enqueueMicrotask(evaluator: StaticJsEvaluator<void>) {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot enqueue a microtask when task is not running.  Current status: ${this._status}`,
      );
    }

    this._microtasks.push(evaluator);
  }

  raiseUnhandledRejection(error: StaticJsValue): () => void {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot raise an uncaught error when task is not running.  Current status: ${this._status}`,
      );
    }

    this._uncaughtErrors.push(error);
    return () => {
      const index = this._uncaughtErrors.indexOf(error);
      if (index !== -1) {
        this._uncaughtErrors.splice(index, 1);
      }
    };
  }

  invoke() {
    if (this._status !== "pending") {
      throw new StaticJsEngineError(`Cannot invoke a task that is already ${this._status}.`);
    }

    this._status = "running";

    this._runTask(
      this._evaluator,
      "macrotask",
      (value) => this._acceptMacrotask(value),
      (reason) => this._reject(reason),
    );
  }

  private _trySuppressPromiseRejection() {
    if (this._promiseRejectSuppressed) {
      return;
    }

    this._promise.catch(() => {
      // No need to do anything here, we will synchronously check for uncaught errors and reject the promise if needed.
    });

    this._promiseRejectSuppressed = true;
  }

  private _tryDrainMicrotasks() {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot drain microtasks when task is not running.  Current status: ${this._status}`,
      );
    }

    const microtask = this._microtasks.shift();
    if (!microtask) {
      this._accept();
      return;
    }

    this._runTask(
      microtask,
      "microtask",
      () => this._acceptMicrotask(),
      (reason) => {
        this._reject(reason);
      },
    );
  }

  private _runTask(
    evaluator: StaticJsEvaluator,
    type: StaticJsTaskType,
    accept: (value: unknown) => void,
    reject: (reason: unknown) => void,
  ) {
    try {
      // Note: This pumps the evaluator to get to the first node.
      // For modules, this might throw during the linking process.
      const taskIterator = this._createTaskIterator(evaluator, type, accept, reject);
      if (!taskIterator) {
        // For modules or other odd microtasks, this may complete synchronously during the initial pumping to find an evaluation node.
        return;
      }

      this._taskRunner(taskIterator);
    } catch (e) {
      reject(e);
    }
  }

  private _createTaskIterator(
    evaluator: StaticJsEvaluator,
    type: StaticJsTaskType,
    accept: (value: unknown) => void,
    reject: (reason: unknown) => void,
  ): StaticJsTaskIterator | null {
    interface TaskIteratorFrame {
      currentNode: Node | null;
      function: StaticJsFunction | null;
    }
    let frames: TaskIteratorFrame[] = [
      {
        currentNode: null,
        function: null,
      },
    ];

    const iterator = evaluateCommands(invokeEvaluator(evaluator), {
      onBeforeNode: (node) => {
        this._currentNode = node;
        const lastFrame = frames.at(0);
        if (lastFrame) {
          lastFrame.currentNode = node;
        }
      },
      onAfterNode: () => {
        this._currentNode = null;
        const lastFrame = frames.at(0);
        if (lastFrame) {
          lastFrame.currentNode = null;
        }
      },
      onFunctionEnter(func) {
        frames.unshift({
          currentNode: func instanceof StaticJsFunctionImpl ? func.ecmaScriptCode : null,
          function: func,
        });
      },
      onFunctionExit() {
        frames.shift();
      },
    });

    let done = false;
    let aborted = false;

    const getCurrentOperation = (): StaticJsTaskIteratorOperation | null => {
      if (!this._currentNode) {
        return null;
      }

      return {
        location: captureLocation(this._currentNode),
        operationType: this._currentNode.type,
      };
    };

    const next = (err?: unknown): IteratorResult<void, void> => {
      if (aborted) {
        throw new StaticJsTaskAbortedError("Cannot call next() on an aborted task.");
      }

      if (done) {
        throw new StaticJsEngineError("Cannot call next() on a completed task.");
      }

      this._assertIsRunning(this);

      this._isEntered = true;
      return EvaluationContext.withStackProvider(this, () => {
        try {
          let deadIteratorLoops = 0;
          while (true) {
            const result = err ? iterator.throw(err) : iterator.next();
            if (result.done) {
              done = true;
              accept(result.value);
              return {
                value: undefined,
                done: true,
              };
            }

            // Try to skip iterations until we get to an actual node to evaluate.
            // This may happen for module initialization and such.
            // Theoretically, nothing in this is user code, and so cannot
            // infinite loop or deadlock.
            if (!this._currentNode) {
              if (++deadIteratorLoops > MaxDeadIteratorLoopCount) {
                throw new StaticJsEngineError(
                  "Hit maximum loop count while trying to find the first node to evaluate.  This may indicate a bug in the engine.",
                );
              }

              continue;
            }

            return {
              value: undefined,
              done: false,
            };
          }
        } catch (e) {
          if (!done) {
            // Normally we should pass this to the generator's throw method,
            // but we are passed generators that handle all of that for us, so the only
            // throws we should be getting here are final throws.
            done = true;
            reject(e);
          }
          return {
            value: undefined,
            done: true,
          };
        } finally {
          this._isEntered = false;
        }
      });
    };

    return {
      type,
      get done() {
        return done;
      },
      get aborted() {
        return aborted;
      },
      get operation() {
        return getCurrentOperation();
      },
      get stack() {
        // Frames are mutated, so clone them if someone asks for the stack.
        return frames
          .map((frame) => ({ ...frame }))
          .map(
            (frame, index) =>
              ({
                depth: frames.length - index,
                function: frame.function,
                get functionName() {
                  const func = frame.function;
                  if (!func) {
                    return null;
                  }

                  return func.getNameSync();
                },
                get sourceLocation() {
                  const node = frame.currentNode;
                  if (!node) {
                    return null;
                  }

                  return captureLocation(node);
                },
              }) satisfies StaticJsTaskIteratorStackFrame,
          );
      },
      next: () => next(),
      throw: (err: unknown) => next(err),
      abort: () => {
        if (done) {
          throw new StaticJsEngineError("Cannot abort a task that is already done or aborted.");
        }

        this._assertIsRunning(this);

        done = true;
        aborted = true;
        reject(new StaticJsTaskAbortedError("Task was aborted."));
      },
    };
  }

  private _acceptMacrotask(value: unknown) {
    this._macrotaskCompletionValue = value;
    this._tryDrainMicrotasks();
  }

  private _acceptMicrotask() {
    this._tryDrainMicrotasks();
  }

  private _accept() {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot accept a task that is not running.  Current status: ${this._status}`,
      );
    }

    if (this._uncaughtErrors.length > 0) {
      this._reject(new StaticJsUnhandledRejectionError(this._uncaughtErrors[0]));
      return;
    }

    this._status = "fulfilled";
    this._acceptPromise(this._macrotaskCompletionValue);
    this._onCompletedCallbacks.forEach((cb) => cb(this._macrotaskCompletionValue));
    this._onCompletedCallbacks = [];
    this._macrotaskCompletionValue = undefined;
  }

  private _reject(reason?: unknown) {
    if (this._status !== "running") {
      throw new StaticJsEngineError(
        `Cannot reject a task that is not running.  Current status: ${this._status}`,
      );
    }

    this._status = "rejected";
    this._rejectPromise(reason);
    this._onCompletedCallbacks.forEach((cb) => cb(undefined, reason));
    this._onCompletedCallbacks = [];
    this._macrotaskCompletionValue = undefined;
  }
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
