import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { invokeEvaluator, StaticJsEvaluator } from "../../evaluator/StaticJsEvaluator.js";

import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import newPromiseCapability from "../algorithms/new-promise-capability.js";

import { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "../types/StaticJsPromise.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { AsyncDriver } from "./AsyncDriver.js";

export class AsyncInvocation {
  private readonly _driver: AsyncDriver;

  private _capability!: StaticJsPromiseCapabilityRecord;

  private _resolved: boolean = false;
  private _nativeCallbacks: ((value: StaticJsValue | null, error?: StaticJsValue) => void)[] = [];

  constructor(
    evaluator: StaticJsEvaluator<void>,
    private readonly _realm: StaticJsRealm,
  ) {
    this._driver = new AsyncDriver(
      // Note: Actual generator funcs wont start until .next(), but that won't be the case for
      // passthroughs.  Should defer this.
      invokeEvaluator(evaluator),
      {
        onThrow: this._onThrow.bind(this),
        onReturn: this._onReturn.bind(this),
        onYield: this._onYield.bind(this),
      },
      this._realm,
    );
  }

  get promise(): StaticJsPromise {
    return this._capability.promise;
  }

  onComplete(callback: (value: StaticJsValue | null, error?: StaticJsValue) => void): void {
    if (this._resolved) {
      throw new StaticJsEngineError(
        "Callbacks cannot be registered on an async invocation after it has resolved.",
      );
    }

    this._nativeCallbacks.push(callback);
  }

  *start(): EvaluationGenerator<StaticJsPromise> {
    if (this._driver.state !== "unstarted") {
      throw new StaticJsEngineError("Async invocations can only be started once.");
    }

    yield* this._ensureCapability();

    // We start evaluating immediately, not on a microtask.
    yield* this._driver.continue(null);

    return this._capability.promise;
  }

  private _onYield(_value: StaticJsValue): EvaluationGenerator<void> {
    throw new StaticJsEngineError("Async function cannot yield.");
  }

  private *_onReturn(value: StaticJsValue): EvaluationGenerator<void> {
    this._resolved = true;
    this._nativeCallbacks.forEach((cb) => cb(value));
    this._nativeCallbacks.length = 0;

    yield* this._capability.resolve.callEvaluator(this._realm.types.undefined, [value]);
  }

  private *_onThrow(reason: StaticJsValue): EvaluationGenerator<void> {
    this._resolved = true;
    this._nativeCallbacks.forEach((cb) => cb(null, reason));
    this._nativeCallbacks.length = 0;

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
