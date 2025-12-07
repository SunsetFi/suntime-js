import StaticJsEngineError from "../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

import newPromiseCapability from "../runtime/algorithms/new-promise-capability.js";

import StaticJsFunctionImpl from "../runtime/types/implementation/StaticJsFunctionImpl.js";

import { isStaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import { isStaticJsObjectLike } from "../runtime/types/StaticJsObjectLike.js";
import type {
  StaticJsPromise,
  StaticJsPromiseCapabilityRecord,
} from "../runtime/types/StaticJsPromise.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";

import { ReturnCompletion } from "./completions/ReturnCompletion.js";
import { ThrowCompletion } from "./completions/ThrowCompletion.js";
import type { NormalCompletion } from "./completions/NormalCompletion.js";

import type EvaluationGenerator from "./EvaluationGenerator.js";

import getValue from "../runtime/algorithms/get-value.js";

export default class AsyncEvaluatorInvocation {
  private _capability!: StaticJsPromiseCapabilityRecord;
  private _state: "pending" | "started" | "running" | "awaiting" | "halted" =
    "pending";

  private _callbacks: ((
    value: StaticJsValue,
    error?: StaticJsValue,
  ) => void)[] = [];

  constructor(
    private readonly _evaluator: EvaluationGenerator,
    private readonly _realm: StaticJsRealm,
    private readonly _resolveToEvaluatorResult: boolean = false,
  ) {}

  get promise(): StaticJsPromise {
    return this._capability.promise;
  }

  onComplete(
    callback: (value: StaticJsValue, error?: StaticJsValue) => void,
  ): void {
    if (this._state === "halted") {
      // We can take a reference to the result and return it to callback here if we really need to.
      throw new StaticJsEngineError(
        "Async function can not be listened to after it has completed.",
      );
    }

    this._callbacks.push(callback);
  }

  *start(): EvaluationGenerator<StaticJsPromise> {
    if (this._state !== "pending") {
      throw new StaticJsEngineError("Async function can only be started once.");
    }

    this._state = "started";

    this._capability = yield* newPromiseCapability(
      this._realm.types.constructors.Promise,
      this._realm,
    );

    // We start evaluating immediately, not on a microtask.
    yield* this._continue(null);

    return this._capability.promise;
  }

  private *_continue(
    continueWith: NormalCompletion,
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
        let result: IteratorResult<EvaluatorCommand, NormalCompletion>;
        if (continueMode === "throw" && continueWith !== null) {
          continueWith = yield* getValue(continueWith, this._realm);
          result = this._evaluator.throw(new ThrowCompletion(continueWith));
        } else {
          result = this._evaluator.next(continueWith);
        }
        continueMode = "next";

        const { value, done } = result;

        if (done) {
          // Hit the end of the generator, no more function to run.
          let result: StaticJsValue = this._realm.types.undefined;
          if (this._resolveToEvaluatorResult && value != null) {
            result = yield* getValue(value, this._realm);
          }
          yield* this._resolve(result);
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
        yield* this._resolve(e.value ?? this._realm.types.undefined);
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

    this._state = "awaiting";

    const realm = this._realm;
    const continueInvocation = this._continue.bind(this);

    if (isStaticJsObjectLike(awaitable)) {
      const awaitableThen = yield* awaitable.getEvaluator("then");
      if (isStaticJsFunction(awaitableThen)) {
        // Register with the function.
        // The function will be responsible for queueing us on the microtask.
        yield* awaitableThen.callEvaluator(awaitable, [
          new StaticJsFunctionImpl(realm, "resolve", function* (
            _thisArg,
            value,
          ) {
            yield* continueInvocation(value);
            return realm.types.undefined;
          }),
          new StaticJsFunctionImpl(realm, "reject", function* (
            _thisArg,
            value,
          ) {
            yield* continueInvocation(value, "throw");
            return realm.types.undefined;
          }),
        ]);
        return;
      }
    }

    // For everything else, continue on the next microtask.
    this._realm.enqueueMicrotask(function* () {
      yield* continueInvocation(awaitable);
    });
  }

  private *_resolve(value: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    yield* this._capability.resolve.callEvaluator(this._realm.types.undefined, [
      value,
    ]);

    this._callbacks.forEach((callback) => {
      callback(value);
    });

    this._callbacks = [];
  }

  private *_reject(reason: StaticJsValue): EvaluationGenerator<void> {
    if (this._state === "halted") {
      return;
    }

    this._halt();

    const result = this._realm.types.undefined;

    yield* this._capability.reject.callEvaluator(result, [reason]);

    this._callbacks.forEach((callback) => {
      callback(result, reason);
    });

    this._callbacks = [];
  }

  private _halt() {
    this._state = "halted";
  }
}
