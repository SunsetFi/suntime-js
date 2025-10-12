import type { Node } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import StaticJsTaskAbortedError from "../../../errors/StaticJsTaskAbortedError.js";

import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsEvaluator } from "../StaticJsRealm.js";
import type {
  StaticJsTaskIterator,
  StaticJsTaskIteratorOperation,
  StaticJsTaskRunner,
} from "../StaticJsTaskIterator.js";

export default class Macrotask {
  private readonly _microtasks: StaticJsEvaluator<void>[] = [];

  private readonly _promise: Promise<unknown>;

  private _status: "pending" | "running" | "fulfilled" | "rejected" = "pending";
  private _macrotaskCompletionValue: unknown | undefined = undefined;
  private _acceptPromise!: (value: unknown) => void;
  private _rejectPromise!: (reason?: unknown) => void;

  // This isn't the same as the promise.  The promise is for returning to the outside world,
  // but our internals still want to be notified when the task completes without marking the rejection
  // as handled.
  private _onCompletedCallbacks: ((value: unknown, err?: unknown) => void)[] =
    [];

  private _currentNode: Node | null = null;

  constructor(
    private readonly _evaluator: StaticJsEvaluator,
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
    this._taskRunner(taskIterator);
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
      next: () => {
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

        try {
          const result = iterator.next();
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
        }
      },

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
