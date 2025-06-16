import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/index.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import speciesConstructor from "../../algorithms/species-constructor.js";

import {
  isStaticJsFunction,
  type StaticJsFunction,
} from "../StaticJsFunction.js";
import { isStaticJsPromise, type StaticJsPromise } from "../StaticJsPromise.js";
import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";
import StaticJsFunctionImpl from "./StaticJsFunctionBase.js";

interface PromiseCapabilityRecord {
  promise: StaticJsPromise;
  resolve: StaticJsFunction;
  reject: StaticJsFunction;
}

interface ReactionRecord {
  capability: PromiseCapabilityRecord;
  handler: StaticJsFunction | null;
  type: "fulfill" | "reject";
}

export default class StaticJsPromiseImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsPromise
{
  private _state: "pending" | "fulfilled" | "rejected" = "pending";
  private _result: StaticJsValue | null = null;
  private _fulfullReactions: ReactionRecord[] = [];
  private _rejectReactions: ReactionRecord[] = [];
  private _isHandled: boolean = false;

  constructor(realm: StaticJsRealm) {
    super(realm, realm.types.prototypes.promiseProto);
  }

  get runtimeTypeOf() {
    return "promise" as const;
  }

  resolve(value: StaticJsValue) {
    if (this._state !== "pending") {
      return;
    }

    this._state = "fulfilled";
    this._result = value;

    for (const reaction of this._fulfullReactions) {
      queuePromiseReactionJob(this.realm, reaction, value);
    }

    this._fulfullReactions = [];
    this._rejectReactions = [];
  }

  reject(reason: StaticJsValue) {
    if (this._state !== "pending") {
      return;
    }

    this._state = "rejected";
    this._result = reason;

    for (const reaction of this._rejectReactions) {
      queuePromiseReactionJob(this.realm, reaction, reason);
    }

    this._fulfullReactions = [];
    this._rejectReactions = [];
  }

  *thenEvaluator(
    onFulfilled?: StaticJsFunction,
    onRejected?: StaticJsFunction,
  ): EvaluationGenerator<StaticJsPromise> {
    const c = yield* speciesConstructor(
      this,
      this.realm.types.constructors.Promise,
      this.realm,
    );
    const resultCapability = yield* newPromiseCapability(c, this.realm);

    const fulfillHandler = isStaticJsFunction(onFulfilled) ? onFulfilled : null;
    const rejectHandler = isStaticJsFunction(onRejected) ? onRejected : null;

    const fulfillReaction: ReactionRecord = {
      type: "fulfill",
      handler: fulfillHandler,
      capability: resultCapability,
    };

    const rejectReaction: ReactionRecord = {
      type: "reject",
      handler: rejectHandler,
      capability: resultCapability,
    };

    switch (this._state) {
      case "pending":
        this._fulfullReactions.push(fulfillReaction);
        this._rejectReactions.push(rejectReaction);
        break;
      case "fulfilled":
        queuePromiseReactionJob(this.realm, fulfillReaction, this._result!);
        break;
      case "rejected":
        queuePromiseReactionJob(this.realm, rejectReaction, this._result!);
        break;
    }

    this._isHandled = true;

    return resultCapability.promise;
  }

  *catchEvaluator(
    onRejected: StaticJsFunction,
  ): EvaluationGenerator<StaticJsPromise> {
    return yield* this.thenEvaluator(undefined, onRejected);
  }
}

function* newPromiseCapability(
  constructor: StaticJsFunction,
  realm: StaticJsRealm,
): EvaluationGenerator<PromiseCapabilityRecord> {
  // FIXME: Support promise subclassing.
  // The majority of this is spec compliant.
  // However, we still enforce that we get a StaticJsPromise at the end of it,
  // which prevents any subclassing.

  if (!constructor.isConstructor) {
    throw new ThrowCompletion(
      realm.types.error(
        "TypeError",
        "Promise constructor must be a constructor",
      ),
    );
  }

  let resolveFunc: StaticJsFunction | null = null;
  let rejectFunc: StaticJsFunction | null = null;

  const resolver = new StaticJsFunctionImpl(realm, "resolver", function* (
    thisArg,
    resolve,
    reject,
  ) {
    if (resolveFunc !== null || rejectFunc !== null) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Promise resolver called multiple times",
        ),
      );
    }

    if (!isStaticJsFunction(resolve) || !isStaticJsFunction(reject)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Resolve and reject must be functions"),
      );
    }

    resolveFunc = resolve;
    rejectFunc = reject;
    return null;
  });

  const promise = yield* constructor.constructEvaluator(resolver);
  if (resolveFunc == null || rejectFunc == null) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Promise resolver did not get called"),
    );
  }

  if (!isStaticJsPromise(promise)) {
    throw new ThrowCompletion(
      realm.types.error(
        "TypeError",
        "Promise constructor did not result in a promise",
      ),
    );
  }

  return {
    promise,
    resolve: resolveFunc,
    reject: rejectFunc,
  };
}

function queuePromiseReactionJob(
  realm: StaticJsRealm,
  reaction: ReactionRecord,
  argument: StaticJsValue,
) {
  realm.enqueueMicrotask(function* () {
    const { handler, capability } = reaction;

    try {
      if (!handler) {
        // This can only be two values but it's cleaner to write it out
        // this way.
        let capabilityFunc: StaticJsFunction;
        switch (reaction.type) {
          case "fulfill":
            capabilityFunc = capability.resolve;
            break;
          case "reject":
            capabilityFunc = capability.reject;
            break;
          default:
            throw new StaticJsEngineError("Unknown promise reaction type.");
        }

        yield* capabilityFunc.callEvaluator(realm.types.undefined, argument);
      } else {
        const result = yield* handler.callEvaluator(
          realm.types.undefined,
          argument,
        );
        yield* capability.resolve.callEvaluator(realm.types.undefined, result);
      }
    } catch (e) {
      if (e instanceof ThrowCompletion) {
        yield* capability.reject.callEvaluator(realm.types.undefined, e.value);
      }

      throw e;
    }
  });
}
