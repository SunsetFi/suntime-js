import type { Node } from "@babel/types";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import StaticJsTaskAbortedError from "../../../errors/StaticJsTaskAbortedError.js";
import StaticJsUnhandledRejectionError from "../../../errors/StaticJsUnhandledRejectionError.js";

import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsEvaluator } from "../../../evaluator/StaticJsEvaluator.js";
import type {
  StaticJsTaskIterator,
  StaticJsTaskIteratorOperation,
  StaticJsTaskRunner,
} from "../../tasks/StaticJsTaskIterator.js";

export default class Macrotask {
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
   * Callbacks to inform external systems when the task completes.
   * This isn't the same as the promise, as we need to run synchronous checks and cleanups
   * in the realm based on macrotask completion.
   */
  private _onCompletedCallbacks: ((value: unknown, err?: unknown) => void)[] =
    [];

  /**
   * Whether the task is currently evaluating code.
   */
  private _isEntered: boolean = false;

  /**
   * The current AST node being executed, if any.
   */
  private _currentNode: Node | null = null;

  constructor(
    private readonly _evaluator: StaticJsEvaluator<unknown>,
    private readonly _taskRunner: StaticJsTaskRunner,
    // This shouldn't be needed if this task stays in sync with the realm about whether it is running.
    private readonly _assertIsRunning: (task: Macrotask) => void,
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

  onComplete(callback: (value: unknown, err?: unknown) => void) {
    this._onCompletedCallbacks.push(callback);
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
      throw new StaticJsEngineError(
        `Cannot invoke a task that is already ${this._status}.`,
      );
    }

    this._status = "running";

    this._runTask(
      this._evaluator,
      (value) => this._acceptMacrotask(value),
      (reason) => this._reject(reason),
    );
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
      () => this._acceptMicrotask(),
      (reason) => {
        this._reject(reason);
      },
    );
  }

  private _runTask(
    evaluator: StaticJsEvaluator,
    accept: (value: unknown) => void,
    reject: (reason: unknown) => void,
  ) {
    const taskIterator = this._createTaskIterator(evaluator, accept, reject);
    try {
      this._taskRunner(taskIterator);
    } catch (e) {
      reject(e);
    }
  }

  private _createTaskIterator(
    evaluator: StaticJsEvaluator,
    accept: (value: unknown) => void,
    reject: (reason: unknown) => void,
  ): StaticJsTaskIterator {
    const iterator = evaluateCommands(invokeEvaluator(evaluator), {
      onBeforeNode: (node) => {
        // This is a bit of a hack, but we need
        this._currentNode = node;
      },
      onAfterNode: () => {
        this._currentNode = null;
      },
    });

    let done = false;
    let aborted = false;

    const getCurrentOperation = (): StaticJsTaskIteratorOperation | null => {
      if (
        !this._currentNode ||
        !this._currentNode.loc ||
        this._currentNode.start == null ||
        this._currentNode.end == null
      ) {
        return null;
      }

      return {
        operationType: this._currentNode.type,
        location: {
          start: {
            line: this._currentNode.loc.start.line,
            column: this._currentNode.loc.start.column,
            character: this._currentNode.start,
          },
          end: {
            line: this._currentNode.loc.end.line,
            column: this._currentNode.loc.end.column,
            character: this._currentNode.end,
          },
        },
      };
    };

    const next = (err?: unknown): IteratorResult<void, void> => {
      if (aborted) {
        throw new StaticJsTaskAbortedError(
          "Cannot call next() on an aborted task.",
        );
      }

      if (done) {
        throw new StaticJsEngineError(
          "Cannot call next() on a completed task.",
        );
      }

      this._assertIsRunning(this);

      this._isEntered = true;
      try {
        const result = err ? iterator.throw(err) : iterator.next();
        if (result.done) {
          done = true;
          accept(result.value);
        }
        return {
          value: undefined,
          done: result.done,
        };
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
    };

    return {
      get done() {
        return done;
      },
      get aborted() {
        return aborted;
      },
      get operation() {
        return getCurrentOperation();
      },
      next: () => next(),
      throw: (err: unknown) => next(err),
      abort: () => {
        if (done) {
          throw new StaticJsEngineError(
            "Cannot abort a task that is already done or aborted.",
          );
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
      this._reject(
        new StaticJsUnhandledRejectionError(this._uncaughtErrors[0]),
      );
      return;
    }

    this._status = "fulfilled";
    this._acceptPromise(this._macrotaskCompletionValue);
    this._onCompletedCallbacks.forEach((cb) =>
      cb(this._macrotaskCompletionValue),
    );
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

function invokeEvaluator<T>(
  evaluator: StaticJsEvaluator<T>,
): EvaluationGenerator<T> {
  if (typeof evaluator === "function") {
    return evaluator();
  } else {
    return evaluator;
  }
}
