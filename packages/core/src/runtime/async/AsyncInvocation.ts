import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { invokeEvaluator, StaticJsEvaluator } from "../../evaluator/StaticJsEvaluator.js";

import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import getMethod from "../algorithms/get-method.js";
import newPromiseCapability from "../algorithms/new-promise-capability.js";

import { StaticJsFunctionImpl } from "../types/implementation/StaticJsFunctionImpl.js";
import { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "../types/StaticJsPromise.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { AsyncDriver } from "./AsyncDriver.js";

export class AsyncInvocation extends AsyncDriver {
  private _capability!: StaticJsPromiseCapabilityRecord;

  constructor(evaluator: StaticJsEvaluator<void>, realm: StaticJsRealm) {
    // We can unwrap / invoke it here, as it won't actually start the function until the first .next() call.
    super(invokeEvaluator(evaluator), realm);
  }

  get promise(): StaticJsPromise {
    return this._capability.promise;
  }

  *onComplete(
    callback: (value: StaticJsValue, error?: StaticJsValue) => void,
  ): EvaluationGenerator<void> {
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
    if (this.state !== "unstarted") {
      throw new StaticJsEngineError("Async invocations can only be started once.");
    }

    yield* this._ensureCapability();

    // We start evaluating immediately, not on a microtask.
    yield* this._continue(null);

    return this._capability.promise;
  }

  protected override _onYield(_value: StaticJsValue): EvaluationGenerator<void> {
    throw new StaticJsEngineError("Async function cannot yield.");
  }

  protected override *_onReturn(value: StaticJsValue): EvaluationGenerator<void> {
    yield* this._resolve(value);
  }

  protected override *_onThrow(reason: StaticJsValue): EvaluationGenerator<void> {
    yield* this._reject(reason);
  }

  protected override *_onResolve(value: StaticJsValue): EvaluationGenerator<void> {
    yield* this._continue(Completion.Normal(value));
  }

  protected override *_onReject(reason: StaticJsValue): EvaluationGenerator<void> {
    yield* this._continue(Completion.Throw(reason));
  }

  private *_resolve(value: StaticJsValue) {
    yield* this._capability.resolve.callEvaluator(this._realm.types.undefined, [value]);
  }

  private *_reject(reason: StaticJsValue) {
    yield* this._capability.reject.callEvaluator(this._realm.types.undefined, [reason]);
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
}
