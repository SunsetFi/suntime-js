import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import speciesConstructor from "../../algorithms/species-constructor.js";
import newPromiseCapability from "../../algorithms/new-promise-capability.js";

import {
  isStaticJsFunction,
  type StaticJsFunction,
} from "../StaticJsFunction.js";
import {
  type StaticJsPromiseCapabilityRecord,
  type StaticJsPromise,
} from "../StaticJsPromise.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

interface ReactionRecord {
  capability: StaticJsPromiseCapabilityRecord;
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
  private _clearUncaughtError: (() => void) | null = null;

  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObjectLike | null = null,
  ) {
    super(realm, prototype ?? realm.types.prototypes.promiseProto);
  }

  get runtimeTypeOf() {
    return "promise" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Promise;
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

    if (this._rejectReactions.length === 0) {
      this._clearUncaughtError = this.realm.raiseUnhandledRejection(reason);
    } else {
      for (const reaction of this._rejectReactions) {
        queuePromiseReactionJob(this.realm, reaction, reason);
      }
    }

    this._fulfullReactions = [];
    this._rejectReactions = [];
  }

  *thenEvaluator(
    onFulfilled?: StaticJsFunction,
    onRejected?: StaticJsFunction,
    resultCapability: StaticJsPromiseCapabilityRecord | null = null,
  ): EvaluationGenerator<StaticJsPromise> {
    const c = yield* speciesConstructor(
      this,
      this.realm.types.constructors.Promise,
      this.realm,
    );

    resultCapability ??= yield* newPromiseCapability(c, this.realm);

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
        this._clearUncaughtError?.();
        queuePromiseReactionJob(this.realm, rejectReaction, this._result!);
        break;
    }

    return resultCapability.promise;
  }

  *catchEvaluator(
    onRejected: StaticJsFunction,
  ): EvaluationGenerator<StaticJsPromise> {
    return yield* this.thenEvaluator(undefined, onRejected);
  }

  toJsSync(): Promise<unknown> {
    return super.toJsSync() as Promise<unknown>;
  }
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
        const capabilityFunc =
          reaction.type === "fulfill" ? capability.resolve : capability.reject;
        yield* capabilityFunc.callEvaluator(realm.types.undefined, [argument]);
      } else {
        const result = yield* handler.callEvaluator(realm.types.undefined, [
          argument,
        ]);
        yield* capability.resolve.callEvaluator(realm.types.undefined, [
          result,
        ]);
      }
    } catch (e) {
      if (e instanceof ThrowCompletion) {
        yield* capability.reject.callEvaluator(realm.types.undefined, [
          e.value,
        ]);
        return;
      }

      throw e;
    }
  });
}
