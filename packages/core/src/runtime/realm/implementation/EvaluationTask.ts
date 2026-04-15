import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { StaticJsUnhandledRejectionError } from "../../../errors/StaticJsUnhandledRejectionError.js";
import {
  EvaluationContext,
  EvaluationContextStackProvider,
} from "../../../evaluator/EvaluationContext.js";
import { type StaticJsEvaluator } from "../../../evaluator/StaticJsEvaluator.js";
import { StaticJsTaskIteratorImpl } from "../../tasks/implementation/StaticJsTaskIteratorImpl.js";
import { StaticJsTaskCalleeType } from "../../tasks/StaticJsTaskCalleeType.js";
import type { StaticJsTaskRunner } from "../../tasks/StaticJsTaskRunner.js";
import type { StaticJsTaskType } from "../../tasks/StaticJsTaskType.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

export class EvaluationTask implements EvaluationContextStackProvider {
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

  constructor(
    private readonly _evaluator: StaticJsEvaluator<unknown>,
    private readonly _calleeType: StaticJsTaskCalleeType,
    private readonly _async: boolean,
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
      const taskIterator = new StaticJsTaskIteratorImpl(
        type,
        this._calleeType,
        this._async,
        evaluator,
        this._scope,
        accept,
        reject,
      );

      this._taskRunner(taskIterator);
    } catch (e) {
      reject(e);
    }
  }

  private _scope = (cb: () => void) => {
    this._assertIsRunning(this);
    this._isEntered = true;
    try {
      EvaluationContext.withStackProvider(this, cb);
    } finally {
      this._isEntered = false;
    }
  };

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
