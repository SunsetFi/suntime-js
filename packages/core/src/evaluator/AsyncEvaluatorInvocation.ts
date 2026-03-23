import { StaticJsEngineError } from "../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

import newPromiseCapability from "../runtime/algorithms/new-promise-capability.js";
import promiseResolve from "../runtime/algorithms/promise-resolve.js";

import StaticJsFunctionImpl from "../runtime/types/implementation/StaticJsFunctionImpl.js";

import type {
  StaticJsPromise,
  StaticJsPromiseCapabilityRecord,
} from "../runtime/types/StaticJsPromise.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import getValue from "../runtime/algorithms/get-value.js";
import getMethod from "../runtime/algorithms/get-method.js";

import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";

import { Completion } from "./completions/Completion.js";
import type { CompletionValue } from "./completions/CompletionValue.js";
import { Q } from "./completions/Q.js";

import type { EvaluationGenerator } from "./EvaluationGenerator.js";
import { EvaluationContext } from "./EvaluationContext.js";

export class AsyncEvaluatorInvocation {
  private _capability!: StaticJsPromiseCapabilityRecord;
  private _state: "pending" | "started" | "running" | "awaiting" | "halted" = "pending";

  constructor(
    private readonly _evaluator: EvaluationGenerator,
    private readonly _realm: StaticJsRealm,
    private readonly _resolveToEvaluatorResult: boolean = false,
  ) {}

  get promise(): StaticJsPromise {
    return this._capability.promise;
  }

  *onComplete(
    callback: (value: StaticJsValue, error?: StaticJsValue) => void,
  ): EvaluationGenerator<void> {
    if (this._state === "halted") {
      // We can take a reference to the result and return it to callback here if we really need to,
      // but be careful of keeping object references alive.
      throw new StaticJsEngineError(
        "Async function can not be listened to after it has completed.",
      );
    }

    yield* this._ensureCapability();

    // We can run outside of any evaluation context, so pass a realm manually.
    const thenMethod = yield* getMethod(this.promise, "then", this._realm);
    if (!thenMethod) {
      throw new StaticJsEngineError("Async function promise does not have a then method.");
    }

    const typeUndefined = this._realm.types.undefined;
    yield* thenMethod.callEvaluator(this.promise, [
      new StaticJsFunctionImpl(this._realm, "onFulfilled", function* (_thisArg, value) {
        callback(value);
        return typeUndefined;
      }),
      new StaticJsFunctionImpl(this._realm, "onRejected", function* (_thisArg, reason) {
        callback(typeUndefined, reason);
        return typeUndefined;
      }),
    ]);
  }

  *start(): EvaluationGenerator<StaticJsPromise> {
    if (this._state !== "pending") {
      throw new StaticJsEngineError("Async function can only be started once.");
    }

    yield* this._ensureCapability();

    // this._pausedContext = EvaluationContext.current;

    this._state = "started";

    // We start evaluating immediately, not on a microtask.
    yield* this._continue(null);

    return this._capability.promise;
  }

  private *_ensureCapability(): EvaluationGenerator<void> {
    if (this._capability) {
      return;
    }

    this._capability = yield* newPromiseCapability(
      this._realm.types.constructors.Promise,
      this._realm,
    );
  }

  private *_continue(
    continueWith: CompletionValue,
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
        let result: IteratorResult<EvaluatorCommand, Completion.Normal>;
        if (continueMode === "throw" && continueWith !== null) {
          continueWith = yield* getValue(continueWith);
          result = this._evaluator.throw(Completion.Throw(continueWith));
        } else {
          result = this._evaluator.next(continueWith);
        }

        continueMode = "next";

        const { value, done } = result;

        if (done) {
          // Hit the end of the generator, no more function to run.
          let result: StaticJsValue = this._realm.types.undefined;
          if (this._resolveToEvaluatorResult && value != null) {
            result = yield* getValue(value);
          }

          yield* this._resolve(result);
          return;
        }

        if (value.command === "await") {
          // Signal for us to await.
          // Handle the awaitable and pause execution.
          yield* this._await(value.awaitable);
          return;
        }

        // Chain the yield to the parent handler.
        continueWith = yield value;
      }
    } catch (e) {
      if (Completion.Throw.is(e)) {
        // Function threw an error, reject the promise with it.
        yield* this._reject(e.value);
        return;
      }

      if (Completion.Return.is(e)) {
        // Function had a return statement, resolve the promise with it.
        yield* this._resolve(e.value ?? this._realm.types.undefined);
        return;
      }

      throw e;
    }
  }

  private *_await(value: StaticJsValue): EvaluationGenerator<void> {
    if (this._state !== "running") {
      throw new StaticJsEngineError("Async function can only register continuations when running.");
    }

    this._state = "awaiting";

    const asyncContext = EvaluationContext.current;
    const promise = yield* Q(
      promiseResolve(this._realm.types.constructors.Promise, value, this._realm),
    );

    const realm = this._realm;
    const onContinue = this._continue.bind(this);
    const onFulfilled = new StaticJsFunctionImpl(
      this._realm,
      "onFulfilled",
      function* (_thisArg, value) {
        yield* asyncContext.run(function* () {
          yield* onContinue(value, "next");
        });
        return realm.types.undefined;
      },
    );
    const onRejected = new StaticJsFunctionImpl(
      this._realm,
      "onRejected",
      function* (_thisArg, reason) {
        yield* asyncContext.run(function* () {
          yield* onContinue(reason, "throw");
        });
        return realm.types.undefined;
      },
    );

    yield* promise.thenEvaluator(onFulfilled, onRejected, false);
  }

  private *_resolve(value: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    yield* this._capability.resolve.callEvaluator(this._realm.types.undefined, [value]);
  }

  private *_reject(reason: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    yield* this._capability.reject.callEvaluator(this._realm.types.undefined, [reason]);
  }

  private _halt() {
    this._state = "halted";
  }
}
