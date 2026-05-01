import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { AwaitCommand } from "../../../../evaluator/commands/AwaitCommand.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { X } from "../../../../evaluator/completions/X.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { invokeEvaluator, StaticJsEvaluator } from "../../../../evaluator/StaticJsEvaluator.js";
import { call } from "../../../algorithms/call.js";
import { newPromiseCapability } from "../../../algorithms/new-promise-capability.js";
import { promiseResolve } from "../../../algorithms/promise-resolve.js";
import { AsyncDriver } from "../../../async/AsyncDriver.js";
import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsAsyncGenerator } from "../../StaticJsAsyncGenerator.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "../../StaticJsPromise.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { isStaticJsValue, StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

import { StaticJsNativeFunctionImpl } from "./StaticJsNativeFunctionImpl.js";

interface AsyncGeneratorRequest {
  completion: Completion;
  capability: StaticJsPromiseCapabilityRecord;
}
export class StaticJsAsyncGeneratorImpl
  extends StaticJsOrdinaryObjectImpl
  implements StaticJsAsyncGenerator
{
  private readonly _driver: AsyncDriver;

  private _state:
    | "suspended-start"
    | "suspended-yield"
    | "executing"
    | "draining-queue"
    | "completed" = "suspended-start";
  private _pausedContext: EvaluationContext | null = null;

  private readonly _asyncGeneratorQueue: AsyncGeneratorRequest[] = [];

  constructor(
    closure: StaticJsEvaluator<void>,
    private readonly _generatorBrand: string | null,
    realm: StaticJsRealm,
    proto?: StaticJsObject,
  ) {
    super(realm, proto ?? realm.types.prototypes.asyncGeneratorProto);
    this._driver = new AsyncDriver(
      // Note: Actual generator funcs wont start until .next(), but that won't be the case for
      // passthroughs.  Should defer this.
      invokeEvaluator(closure),
      {
        onYield: this._onYield.bind(this),
        onReturn: this._onReturn.bind(this),
        onThrow: this._onThrow.bind(this),
      },
      realm,
    );
    this._pausedContext = EvaluationContext.current;
  }

  override get runtimeTypeOf() {
    return "async-generator" as const;
  }

  override get runtimeTypeCode(): StaticJsTypeCode {
    return StaticJsTypeCode.AsyncGenerator;
  }

  get generatorBrand() {
    return this._generatorBrand;
  }

  *nextEvaluator(
    value: StaticJsValue = this.realm.types.undefined,
  ): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* newPromiseCapability(
      this.realm.types.constructors.Promise,
      this.realm,
    );

    // Note: Check brand in the next() function implementation.
    const state = this._state;
    if (state === "completed") {
      const iteratorResult = yield* createIteratorResultObject(
        this.realm.types.undefined,
        true,
        this.realm,
      );
      yield* X(call(promiseCapability.resolve, this.realm.types.undefined, [iteratorResult]));
      return promiseCapability.promise;
    }

    const completion = Completion.Normal(value);
    this._asyncGeneratorEnqueue(completion, promiseCapability);

    if (state === "suspended-start" || state === "suspended-yield") {
      yield* this._asyncGeneratorResume(completion);
    }

    return promiseCapability.promise;
  }

  *throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* newPromiseCapability(
      this.realm.types.constructors.Promise,
      this.realm,
    );

    let state = this._state;

    if (state === "suspended-start") {
      state = this._state = "completed";
    }

    if (state === "completed") {
      yield* X(call(promiseCapability.reject, this.realm.types.undefined, [value]));
      return promiseCapability.promise;
    }

    const completion = Completion.Throw(value);
    this._asyncGeneratorEnqueue(completion, promiseCapability);
    if (state === "suspended-yield") {
      yield* this._asyncGeneratorResume(completion);
    }

    return promiseCapability.promise;
  }

  *returnEvaluator(
    value: StaticJsValue = this.realm.types.undefined,
  ): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* newPromiseCapability(
      this.realm.types.constructors.Promise,
      this.realm,
    );

    const completion = Completion.Return(value);
    this._asyncGeneratorEnqueue(completion, promiseCapability);

    const state = this._state;
    if (state === "suspended-start" || state === "completed") {
      this._state = "draining-queue";
      yield* this._asyncGeneratorAwaitReturn();
    } else if (state === "suspended-yield") {
      yield* this._asyncGeneratorResume(completion);
    }

    return promiseCapability.promise;
  }

  private *_onYield(value: StaticJsValue): EvaluationGenerator<Completion | false> {
    const completion = Completion.Normal(value);

    yield* this._asyncGeneratorCompleteStep(completion, false);

    const queue = this._asyncGeneratorQueue;
    if (queue.length > 0) {
      const toYield = queue[0];
      const resumptionValue = toYield.completion;
      return yield* this._asyncGeneratorUnwrapYieldResumption(resumptionValue);
    }

    this._state = "suspended-yield";
    this._pausedContext = EvaluationContext.current;

    // Stop execution until next() or throw() is called.
    return false;
  }

  private *_onReturn(value: StaticJsValue): EvaluationGenerator<void> {
    this._state = "draining-queue";
    yield* this._asyncGeneratorCompleteStep(Completion.Normal(value), true);
    yield* this._asyncGeneratorDrainQueue();
  }

  private *_onThrow(reason: StaticJsValue): EvaluationGenerator<void> {
    this._state = "draining-queue";
    yield* this._asyncGeneratorCompleteStep(Completion.Throw(reason), true);
    yield* this._asyncGeneratorDrainQueue();
  }

  private *_asyncGeneratorUnwrapYieldResumption(
    resumptionValue: Completion,
  ): EvaluationGenerator<Completion> {
    if (!Completion.Return.is(resumptionValue)) {
      return yield* Q(resumptionValue);
    }

    const awaited = yield* AwaitCommand(Completion.value(resumptionValue));
    if (Completion.Throw.is(awaited)) {
      return yield* Q(awaited);
    }
    throw Completion.Return(Completion.value(awaited));
  }

  private *_asyncGeneratorResume(completion: Completion) {
    if (this._state !== "suspended-start" && this._state !== "suspended-yield") {
      throw new StaticJsEngineError(
        "Async generator can only be resumed if it is in suspended-start or suspended-yield state.",
      );
    }

    // Hack: We are far from what the spec wants.
    // The spec wants AsyncGeneratorYield to suspend itself, and do a this._asyncGeneratorUnwrapReturn when resuming.
    // We can't do that since we are both the async driver and awaiter, so we have nothing that can await / suspend us.
    // Instead, do it all by hand.
    if (Completion.Return.is(completion)) {
      yield* this._asyncGeneratorResumeForReturn(completion);
      return;
    }

    this._state = "executing";
    const { _driver } = this;

    const context = this._pausedContext;
    this._pausedContext = null;

    function* resume() {
      yield* _driver.continue(completion);
    }

    if (context) {
      yield* context.run(resume);
    } else {
      yield* resume();
    }
  }

  private *_asyncGeneratorResumeForReturn(completion: ReturnCompletion) {
    // This is a hacky mess of Await(value) fuzed with AsyncGeneratorUnwrapYieldResumption.
    // This is here because we have no higher level awaiter that can suspend our own
    // async generator functions.
    // This is a fusion of AsyncGeneratorYield's resumption plus asyncGeneratorResume, which resumes it.

    const driver = this._driver;
    const realm = this.realm;
    const unsuspendContext = () => {
      const context = this._pausedContext;
      if (!context) {
        throw new StaticJsEngineError(
          "Expected paused context to be set when unsuspending async generator for return.",
        );
      }
      this._pausedContext = null;
      return context;
    };

    const promise = yield* captureThrownCompletion(
      promiseResolve(
        this.realm.types.constructors.Promise,
        Completion.value(completion),
        this.realm,
      ),
    );
    if (Completion.Abrupt.is(promise)) {
      const context = unsuspendContext();
      yield* context.run(function* () {
        yield* driver.continue(promise);
      });
      return;
    }

    const onFulfilled = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, v) {
      const context = unsuspendContext();
      return yield* context.run(function* () {
        yield* driver.continue(Completion.Return(v));
        return realm.types.undefined;
      });
    });
    const onRejected = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, e) {
      const context = unsuspendContext();
      return yield* context.run(function* () {
        yield* driver.continue(Completion.Throw(e));
        return realm.types.undefined;
      });
    });

    yield* promise.thenEvaluator(onFulfilled, onRejected);
  }

  private *_asyncGeneratorAwaitReturn(): EvaluationGenerator<void> {
    if (this._state !== "draining-queue") {
      throw new StaticJsEngineError(
        "Async generator can only await return if it is in draining-queue state.",
      );
    }

    const queue = this._asyncGeneratorQueue;
    if (queue.length === 0) {
      throw new StaticJsEngineError("Async generator return awaiting called with empty queue.");
    }

    const next = queue[0];
    const completion = next.completion;
    if (!Completion.Return.is(completion)) {
      throw new StaticJsEngineError(
        "Async generator return awaiting called with non-return completion at the front of the queue.",
      );
    }

    const promiseCompletion = yield* captureThrownCompletion(
      promiseResolve(
        this.realm.types.constructors.Promise,
        Completion.value(completion),
        this.realm,
      ),
    );
    if (Completion.Abrupt.is(promiseCompletion)) {
      yield* this._asyncGeneratorCompleteStep(promiseCompletion, true);
      yield* this._asyncGeneratorDrainQueue();
      return;
    }

    const promise = Completion.value(promiseCompletion);
    // oxlint-disable-next-line typescript/no-this-alias
    const generator = this;

    const onFulfilled = new StaticJsNativeFunctionImpl(
      this.realm,
      "onFulfilled",
      function* (_thisArg, value) {
        if (generator._state !== "draining-queue") {
          throw new StaticJsEngineError(
            "Async generator return awaiting fulfillment handler called when async generator is not in draining-queue state.",
          );
        }

        const result = Completion.Normal(value ?? generator.realm.types.undefined);
        yield* generator._asyncGeneratorCompleteStep(result, true);
        yield* generator._asyncGeneratorDrainQueue();
        return generator.realm.types.undefined;
      },
    );

    const onRejected = new StaticJsNativeFunctionImpl(
      this.realm,
      "onRejected",
      function* (_thisArg, reason) {
        if (generator._state !== "draining-queue") {
          throw new StaticJsEngineError(
            "Async generator return awaiting rejection handler called when async generator is not in draining-queue state.",
          );
        }

        const result = Completion.Throw(reason);
        yield* generator._asyncGeneratorCompleteStep(result, true);
        yield* generator._asyncGeneratorDrainQueue();
        return generator.realm.types.undefined;
      },
    );

    yield* promise.thenEvaluator(onFulfilled, onRejected);
  }

  private *_asyncGeneratorCompleteStep(completion: Completion, done: boolean) {
    const next = this._asyncGeneratorQueue.shift();
    if (!next) {
      throw new StaticJsEngineError("Async generator complete step called with empty queue.");
    }

    const promiseCapability = next.capability;
    if (Completion.Throw.is(completion)) {
      yield* X(call(promiseCapability.reject, this.realm.types.undefined, [completion.value]));
    } else if (Completion.Normal.is(completion) && isStaticJsValue(completion)) {
      const iteratorResult = yield* createIteratorResultObject(completion, done, this.realm);
      yield* X(call(promiseCapability.resolve, this.realm.types.undefined, [iteratorResult]));
    } else {
      throw new StaticJsEngineError(
        "Async generator complete step called with non-normal, non-throw completion.",
      );
    }
  }

  private *_asyncGeneratorDrainQueue(): EvaluationGenerator<void> {
    if (this._state !== "draining-queue") {
      throw new StaticJsEngineError(
        "Async generator drain queue can only be called if async generator is in draining-queue state.",
      );
    }

    const queue = this._asyncGeneratorQueue;

    while (queue.length > 0) {
      const next = queue[0];
      let completion = next.completion;

      if (Completion.Return.is(completion)) {
        yield* this._asyncGeneratorAwaitReturn();
        return;
      }

      if (Completion.Normal.is(completion)) {
        completion = Completion.Normal(this.realm.types.undefined);
      }

      yield* this._asyncGeneratorCompleteStep(completion, true);
    }

    this._state = "completed";
  }

  private _asyncGeneratorEnqueue(
    completion: Completion,
    promiseCapability: StaticJsPromiseCapabilityRecord,
  ) {
    this._asyncGeneratorQueue.push({ completion, capability: promiseCapability });
  }
}
