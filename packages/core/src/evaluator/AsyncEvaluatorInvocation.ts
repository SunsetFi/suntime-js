import StaticJsEngineError from "../errors/StaticJsEngineError.js";

import type { PromiseCapabilityRecord } from "../runtime/algorithms/new-promise-capability.js";
import newPromiseCapability from "../runtime/algorithms/new-promise-capability.js";

import StaticJsFunctionImpl from "../runtime/types/implementation/StaticJsFunctionImpl.js";

import { isStaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import { isStaticJsObjectLike } from "../runtime/types/StaticJsObjectLike.js";
import type { StaticJsPromise } from "../runtime/types/StaticJsPromise.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";

import { ReturnCompletion } from "./completions/ReturnCompletion.js";
import { ThrowCompletion } from "./completions/ThrowCompletion.js";

import type EvaluationContext from "./EvaluationContext.js";
import type EvaluationGenerator from "./EvaluationGenerator.js";

export default class AsyncEvaluatorInvocation {
  private _capability!: PromiseCapabilityRecord;
  private _state: "pending" | "started" | "running" | "awaiting" | "halted" =
    "pending";

  constructor(
    private readonly _evaluator: EvaluationGenerator,
    private readonly _context: EvaluationContext,
  ) {}

  get promise(): StaticJsPromise {
    return this._capability.promise;
  }

  *start(): EvaluationGenerator<StaticJsPromise> {
    if (this._state !== "pending") {
      throw new StaticJsEngineError("Async function can only be started once.");
    }

    this._state = "started";

    this._capability = yield* newPromiseCapability(
      this._context.realm.types.constructors.Promise,
      this._context.realm,
    );

    // We start evaluating immediately, not on a microtask.
    yield* this._continue(null);

    return this._capability.promise;
  }

  private *_continue(
    continueWith: StaticJsValue | null,
    continueMode: "next" | "throw" = "next",
  ): EvaluationGenerator<void> {
    if (this._state !== "started" && this._state !== "awaiting") {
      throw new StaticJsEngineError(
        "Async function can only be continued when running or awaiting.",
      );
    }

    this._state = "running";

    try {
      while (true) {
        let result: IteratorResult<EvaluatorCommand, StaticJsValue | null>;
        if (continueMode === "throw" && continueWith !== null) {
          result = this._evaluator.throw(new ThrowCompletion(continueWith));
        } else {
          result = this._evaluator.next(continueWith);
        }
        continueMode = "next";

        const { value, done } = result;

        if (done) {
          // Hit the end of the generator, no more function to run.
          yield* this._resolve(this._context.realm.types.undefined);
          return;
        }

        if (value.kind === "await") {
          // Signal for us to await.
          // Handle the awaitable and pause execution.
          yield* this._registerContinuation(value.awaitable);
          return;
        }

        // Chain the yield to the parent handler.
        continueWith = yield value;
      }
    } catch (e) {
      if (e instanceof ThrowCompletion) {
        // Function threw an error, reject the promise with it.
        yield* this._reject(e.value);
        return;
      }

      if (e instanceof ReturnCompletion) {
        // Function had a return statement, resolve the promise with it.
        yield* this._resolve(e.value ?? this._context.realm.types.undefined);
        return;
      }

      throw e;
    }
  }

  private *_registerContinuation(
    awaitable: StaticJsValue,
  ): EvaluationGenerator<void> {
    if (this._state !== "running") {
      throw new StaticJsEngineError(
        "Async function can only register continuations when running.",
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    this._state = "awaiting";

    if (isStaticJsObjectLike(awaitable)) {
      const awaitableThen = yield* awaitable.getPropertyEvaluator("then");
      if (isStaticJsFunction(awaitableThen)) {
        // Register with the function.
        // The function will be responsible for queueing us on the microtask.
        yield* awaitableThen.callEvaluator(
          awaitable,
          new StaticJsFunctionImpl(this._context.realm, "resolve", function* (
            _thisArg,
            value,
          ) {
            yield* self._continue(value);
            return self._context.realm.types.undefined;
          }),
          new StaticJsFunctionImpl(this._context.realm, "reject", function* (
            _thisArg,
            value,
          ) {
            yield* self._continue(value, "throw");
            return self._context.realm.types.undefined;
          }),
        );
        return;
      }
    }

    // For everything else, continue on the next microtask.
    this._context.realm.enqueueMicrotask(function* () {
      yield* self._continue(awaitable);
    });
  }

  private *_resolve(value: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    yield* this._capability.resolve.callEvaluator(
      this._context.realm.types.undefined,
      value,
    );
  }

  private *_reject(reason: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    yield* this._capability.reject.callEvaluator(
      this._context.realm.types.undefined,
      reason,
    );
  }

  private _halt() {
    this._state = "halted";
  }
}
