import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import { call } from "#algorithms/call.js";
import { isCallable } from "#algorithms/is-callable.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { speciesConstructor } from "#algorithms/species-constructor.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsCallable } from "../../StaticJsCallable.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsPromiseCapabilityRecord, StaticJsPromise } from "../../StaticJsPromise.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

interface StaticJsReactionRecord {
  capability: StaticJsPromiseCapabilityRecord | null;
  handler: StaticJsCallable | null;
  type: "fulfill" | "reject";
}

export class StaticJsPromiseImpl extends StaticJsOrdinaryObjectImpl implements StaticJsPromise {
  private _state: "pending" | "fulfilled" | "rejected" = "pending";
  private _result: StaticJsValue | null = null;
  private _fulfullReactions: StaticJsReactionRecord[] = [];
  private _rejectReactions: StaticJsReactionRecord[] = [];
  private _clearUncaughtError: (() => void) | null = null;

  constructor(realm: StaticJsRealm, prototype: StaticJsObject | null = null) {
    super(
      realm,
      prototype ?? realm.intrinsics["Promise.prototype"],
      StaticJsMemoryAllocationTag.StaticJsPromise,
    );
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsPromise";
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

  thenSync(
    onFulfilled?: StaticJsCallable | undefined,
    onRejected?: StaticJsCallable | undefined,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPromise {
    return this.realm.invokeEvaluatorSync(
      () => this.thenEvaluator(onFulfilled, onRejected, true),
      opts,
    );
  }

  thenAsync(
    onFulfilled?: StaticJsCallable | undefined,
    onRejected?: StaticJsCallable | undefined,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPromise> {
    return this.realm.invokeEvaluatorAsync(
      () => this.thenEvaluator(onFulfilled, onRejected, true),
      opts,
    );
  }

  thenEvaluator(
    onFulfilled?: StaticJsCallable | undefined,
    onRejected?: StaticJsCallable | undefined,
    resultCapability?: StaticJsPromiseCapabilityRecord | true,
  ): EvaluationGenerator<StaticJsPromise>;
  thenEvaluator(
    onFulfilled: StaticJsCallable | undefined,
    onRejected: StaticJsCallable | undefined,
    resultCapability: false,
  ): EvaluationGenerator<void>;
  *thenEvaluator(
    onFulfilled: StaticJsCallable | undefined,
    onRejected: StaticJsCallable | undefined,
    resultCapability: StaticJsPromiseCapabilityRecord | boolean = true,
  ): EvaluationGenerator<StaticJsPromise | void> {
    let capability: StaticJsPromiseCapabilityRecord | null = null;
    if (resultCapability === undefined || resultCapability === true) {
      const c = yield* speciesConstructor(this, this.realm.intrinsics.Promise, this.realm);
      capability = yield* newPromiseCapability(c);
    } else if (resultCapability !== false) {
      capability = resultCapability;
    }

    const fulfillHandler = isCallable(onFulfilled) ? onFulfilled : null;
    const rejectHandler = isCallable(onRejected) ? onRejected : null;

    const fulfillReaction: StaticJsReactionRecord = {
      type: "fulfill",
      handler: fulfillHandler,
      capability,
    };

    const rejectReaction: StaticJsReactionRecord = {
      type: "reject",
      handler: rejectHandler,
      capability,
    };

    switch (this._state) {
      case "pending":
        this._fulfullReactions.push(fulfillReaction);
        this._rejectReactions.push(rejectReaction);
        // Two retained reaction records (fulfill + reject).
        this.realm.memory.allocate(StaticJsMemoryAllocationTag.StaticJsPromiseReactionOverhead, 2);
        break;
      case "fulfilled":
        queuePromiseReactionJob(this.realm, fulfillReaction, this._result!);
        break;
      case "rejected":
        this._clearUncaughtError?.();
        queuePromiseReactionJob(this.realm, rejectReaction, this._result!);
        break;
    }

    return capability?.promise;
  }

  catchSync(func: StaticJsCallable | undefined, opts?: StaticJsRunTaskOptions): StaticJsPromise {
    return this.thenSync(undefined, func, opts);
  }

  catchAsync(
    func: StaticJsCallable | undefined,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPromise> {
    return this.thenAsync(undefined, func, opts);
  }

  *catchEvaluator(onRejected: StaticJsCallable): EvaluationGenerator<StaticJsPromise> {
    return yield* this.thenEvaluator(undefined, onRejected, true);
  }

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks);

    this._result?.mark(marks);

    for (const reaction of this._fulfullReactions) {
      markReaction(reaction, marks);
    }

    for (const reaction of this._rejectReactions) {
      markReaction(reaction, marks);
    }
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    super.allocateSelf(allocate);

    allocate(
      StaticJsMemoryAllocationTag.StaticJsPromiseReactionOverhead,
      this._fulfullReactions.length + this._rejectReactions.length,
    );
  }

  override toNative(): Promise<unknown> {
    return super.toNative() as Promise<unknown>;
  }
}

function queuePromiseReactionJob(
  realm: StaticJsRealm,
  reaction: StaticJsReactionRecord,
  argument: StaticJsValue,
) {
  realm.enqueuePromiseJob(function* () {
    const { type } = reaction;
    const { handler, capability } = reaction;

    let handlerResult: Completion;
    if (handler === null) {
      if (type === "fulfill") {
        handlerResult = argument;
      } else {
        handlerResult = Completion.Throw(argument);
      }
    } else {
      handlerResult = yield* captureThrownCompletion(
        call(handler, realm.types.undefined, [argument]),
      );
    }

    if (capability === null) {
      return;
    }

    if (Completion.Abrupt.is(handlerResult)) {
      const value = Completion.value(handlerResult);
      if (!isStaticJsValue(value)) {
        throw new StaticJsEngineError("Promise reaction rejected abrupt with non-value");
      }
      yield* Q(call(capability.reject, realm.types.undefined, [value]));
    } else {
      yield* Q(call(capability.resolve, realm.types.undefined, [handlerResult]));
    }
  });
}

function markReaction(reaction: StaticJsReactionRecord, marks: Set<StaticJsAllocation>) {
  const { capability, handler } = reaction;

  if (capability) {
    capability.promise.mark(marks);
    capability.resolve.mark(marks);
    capability.reject.mark(marks);
  }

  if (handler) {
    handler.mark(marks);
  }
}
