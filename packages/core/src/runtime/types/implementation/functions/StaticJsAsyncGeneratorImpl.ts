import { isNode, Node } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";
import { SuspendCommand, SuspendContext } from "../../../../evaluator/commands/SuspendCommand.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { X } from "../../../../evaluator/completions/X.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { Await } from "../../../algorithms/await.js";
import { call } from "../../../algorithms/call.js";
import { newPromiseCapability } from "../../../algorithms/new-promise-capability.js";
import { performPromiseThen } from "../../../algorithms/perform-promise-then.js";
import { promiseResolve } from "../../../algorithms/promise-resolve.js";
import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsAsyncGenerator } from "../../StaticJsAsyncGenerator.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "../../StaticJsPromise.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

import { StaticJsNativeFunctionImpl } from "./StaticJsNativeFunctionImpl.js";

interface AsyncGeneratorRequest {
  completion: Completion;
  capability: StaticJsPromiseCapabilityRecord;
}

export type AsyncGeneratorState =
  | "suspended-start"
  | "suspended-yield"
  | "executing"
  | "draining-queue"
  | "completed";

export class StaticJsAsyncGeneratorImpl
  extends StaticJsOrdinaryObjectImpl
  implements StaticJsAsyncGenerator
{
  private _generatorState: AsyncGeneratorState = "suspended-start";

  private _asyncGeneratorContext: SuspendContext<StaticJsValue>;
  private _asyncGeneratorQueue: AsyncGeneratorRequest[] = [];

  constructor(
    generatorBody: Node | EvaluationGenerator<Completion>,
    private readonly _generatorBrand: string | null,
    realm: StaticJsRealm,
    proto?: StaticJsObject,
  ) {
    super(realm, proto ?? realm.intrinsics.AsyncGeneratorPrototype);

    const genContext = EvaluationContext.current;
    genContext.generator = this;

    function* closure() {
      const acGenContext = EvaluationContext.current;
      const { realm } = acGenContext;

      const acGenerator = acGenContext.generator;
      if (acGenerator instanceof StaticJsAsyncGeneratorImpl === false) {
        throw new StaticJsEngineError(
          "AsyncGenerator closure executio context has incorrect generator type.",
        );
      }

      let result: Completion;
      if (isNode(generatorBody)) {
        result = yield* EvaluateNodeCommand(generatorBody);
      } else {
        result = yield* captureThrownCompletion(generatorBody);
      }

      EvaluationContext.pop();

      acGenerator._generatorState = "draining-queue";

      if (Completion.Normal.is(result)) {
        result = Completion.Normal(Completion.value(realm.types.undefined));
      } else if (Completion.Return.is(result)) {
        result = Completion.Normal(Completion.value(result));
      }

      yield* acGenerator._asyncGeneratorCompleteStep(result, true);
      yield* acGenerator._asyncGeneratorDrainQueue();
      return realm.types.undefined;
    }

    this._asyncGeneratorContext = SuspendCommand.createSuspendedContext<StaticJsValue>(
      closure(),
      genContext,
    );
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
    generatorBrand?: string | null,
  ): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* X(newPromiseCapability(this.realm.intrinsics.Promise));

    const result = yield* captureThrownCompletion(
      this._asyncGeneratorValidate("next", generatorBrand),
    );
    if (Completion.Abrupt.is(result)) {
      yield* X(
        call(promiseCapability.reject, this.realm.types.undefined, [Completion.value(result)]),
      );
      return promiseCapability.promise;
    }

    const state = this._generatorState;
    if (state === "completed") {
      const iteratorResult = yield* createIteratorResultObject(this.realm.types.undefined, true);
      yield* X(call(promiseCapability.resolve, this.realm.types.undefined, [iteratorResult]));
      return promiseCapability.promise;
    }

    const completion = Completion.Normal(value);
    yield* this._asyncGeneratorEnqueue(completion, promiseCapability);

    if (state === "suspended-start" || state === "suspended-yield") {
      yield* this._asyncGeneratorResume(completion);
    } else {
      if (state !== "executing" && state !== "draining-queue") {
        throw new StaticJsEngineError(
          "AsyncGenerator nextEvaluator called when generator is in an invalid state.",
        );
      }
    }

    return promiseCapability.promise;
  }

  *returnEvaluator(
    value: StaticJsValue = this.realm.types.undefined,
    generatorBrand?: string | null,
  ): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* X(newPromiseCapability(this.realm.intrinsics.Promise));

    const result = yield* captureThrownCompletion(
      this._asyncGeneratorValidate("return", generatorBrand),
    );
    if (Completion.Abrupt.is(result)) {
      yield* X(
        call(promiseCapability.reject, this.realm.types.undefined, [Completion.value(result)]),
      );
      return promiseCapability.promise;
    }

    const completion = Completion.Return(value);
    yield* this._asyncGeneratorEnqueue(completion, promiseCapability);

    const state = this._generatorState;
    if (state === "suspended-start" || state === "completed") {
      this._generatorState = "draining-queue";
      yield* this._asyncGeneratorAwaitReturn();
    } else if (state === "suspended-yield") {
      yield* this._asyncGeneratorResume(completion);
    } else {
      if (state !== "executing" && state !== "draining-queue") {
        throw new StaticJsEngineError(
          "AsyncGenerator returnEvaluator called when generator is in an invalid state.",
        );
      }
    }

    return promiseCapability.promise;
  }

  *throwEvaluator(
    value: StaticJsValue,
    generatorBrand?: string | null,
  ): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* X(newPromiseCapability(this.realm.intrinsics.Promise));

    const result = yield* captureThrownCompletion(
      this._asyncGeneratorValidate("throw", generatorBrand),
    );
    if (Completion.Abrupt.is(result)) {
      yield* X(
        call(promiseCapability.reject, this.realm.types.undefined, [Completion.value(result)]),
      );
      return promiseCapability.promise;
    }

    let state = this._generatorState;

    if (state === "suspended-start") {
      this._generatorState = "completed";
      state = "completed";
    }

    if (state === "completed") {
      yield* X(call(promiseCapability.reject, this.realm.types.undefined, [value]));
      return promiseCapability.promise;
    }

    const completion = Completion.Throw(value);
    yield* this._asyncGeneratorEnqueue(completion, promiseCapability);

    if (state === "suspended-yield") {
      yield* this._asyncGeneratorResume(completion);
    } else {
      if (state !== "executing" && state !== "draining-queue") {
        throw new StaticJsEngineError(
          "AsyncGenerator throwEvaluator called when generator is in an invalid state.",
        );
      }
    }

    return promiseCapability.promise;
  }

  *asyncGeneratorYield(
    value: StaticJsValue,
  ): EvaluationGenerator<Completion.Normal | Completion.Abrupt> {
    const genContext = EvaluationContext.current;
    if (genContext.generator !== this) {
      throw new StaticJsEngineError(
        "AsyncGenerator yield context does not have a valid generator.",
      );
    }

    const completion = Completion.Normal(value);
    const previousContext = EvaluationContext.stack.at(-2);
    if (previousContext === undefined) {
      throw new StaticJsEngineError(
        "AsyncGenerator yield context does not have a previous context.",
      );
    }
    const previousRealm = previousContext.realm;
    yield* this._asyncGeneratorCompleteStep(completion, false, previousRealm);

    const queue = this._asyncGeneratorQueue;
    if (queue.length > 0) {
      const toYield = queue[0];
      const resumptionValue = toYield.completion;
      return yield* this._asyncGeneratorUnwrapYieldResumption(resumptionValue);
    }

    this._generatorState = "suspended-yield";

    this._asyncGeneratorContext = SuspendCommand.createContext<StaticJsValue>();

    const resumptionValue = yield* SuspendCommand(
      this._asyncGeneratorContext,
      previousRealm.types.undefined,
    );

    return yield* this._asyncGeneratorUnwrapYieldResumption(resumptionValue);
  }

  private *_asyncGeneratorValidate(
    func: string,
    generatorBrand?: string | null,
  ): EvaluationGenerator<void> {
    if (generatorBrand !== undefined && generatorBrand !== this._generatorBrand) {
      throw Completion.Throw("TypeError", `${func} called on incompatible receiver`);
    }
  }

  private *_asyncGeneratorEnqueue(
    completion: Completion,
    promiseCapability: StaticJsPromiseCapabilityRecord,
  ): EvaluationGenerator<void> {
    const request: AsyncGeneratorRequest = {
      completion,
      capability: promiseCapability,
    };

    this._asyncGeneratorQueue.push(request);
  }

  private *_asyncGeneratorResume(completion: Completion): EvaluationGenerator<void> {
    if (this._generatorState !== "suspended-start" && this._generatorState !== "suspended-yield") {
      throw new StaticJsEngineError(
        "AsyncGenerator resume called when generator is not suspended.",
      );
    }

    const genContext = this._asyncGeneratorContext;

    this._generatorState = "executing";

    yield* SuspendCommand.runSuspendedContext(genContext, completion);
  }

  private *_asyncGeneratorCompleteStep(
    completion: Completion,
    done: boolean,
    realm: StaticJsRealm = EvaluationContext.current.realm,
  ): EvaluationGenerator<void> {
    const queue = this._asyncGeneratorQueue;
    if (queue.length === 0) {
      throw new StaticJsEngineError("AsyncGenerator complete step called with an empty queue.");
    }

    const next = queue.shift()!;

    const promiseCapability = next.capability;

    // Spec seems to guarentee this can only ever be a value.
    // Only really an issue for NormalCompletion, which can be non-StaticJsValue values.
    const value = Completion.value(completion) as StaticJsValue;

    if (Completion.Throw.is(completion)) {
      yield* X(call(promiseCapability.reject, realm.types.undefined, [value]));
    } else {
      if (!Completion.Normal.is(completion)) {
        throw new StaticJsEngineError(
          "AsyncGenerator complete step called with a non-normal completion.",
        );
      }

      let iteratorResult: StaticJsValue;

      if (realm) {
        const oldReam = EvaluationContext.current.realm;
        EvaluationContext.current.realm = realm;
        try {
          iteratorResult = yield* createIteratorResultObject(value, done);
        } finally {
          EvaluationContext.current.realm = oldReam;
        }
      } else {
        iteratorResult = yield* createIteratorResultObject(value, done);
      }

      yield* X(call(promiseCapability.resolve, realm.types.undefined, [iteratorResult]));
    }
  }

  private *_asyncGeneratorUnwrapYieldResumption(
    resumptionValue: Completion,
  ): EvaluationGenerator<Completion.Normal | Completion.Abrupt> {
    if (!Completion.Return.is(resumptionValue)) {
      return resumptionValue;
    }

    const awaited = yield* Await(Completion.value(resumptionValue));
    if (Completion.Throw.is(awaited)) {
      throw awaited;
    }

    if (!Completion.Normal.is(awaited)) {
      throw new StaticJsEngineError(
        "AsyncGenerator yield resumption did not complete with a normal completion.",
      );
    }

    return Completion.Return(Completion.value(awaited));
  }

  private *_asyncGeneratorAwaitReturn(): EvaluationGenerator<void> {
    if (this._generatorState !== "draining-queue") {
      throw new StaticJsEngineError(
        "AsyncGenerator drain queue called when generator is not draining queue.",
      );
    }

    const { realm } = EvaluationContext.current;

    const queue = this._asyncGeneratorQueue;
    if (queue.length === 0) {
      throw new StaticJsEngineError(
        "AsyncGenerator await return called when async generator queue is empty.",
      );
    }

    const next = queue[0];

    let completion = next.completion;
    if (!Completion.Return.is(completion)) {
      throw new StaticJsEngineError(
        "AsyncGenerator await return called with a non-return completion.",
      );
    }

    const promiseCompletion = yield* captureThrownCompletion(
      promiseResolve(realm.intrinsics.Promise, Completion.value(completion)),
    );
    if (Completion.Abrupt.is(promiseCompletion)) {
      yield* this._asyncGeneratorCompleteStep(promiseCompletion, true);
      yield* this._asyncGeneratorDrainQueue();
      return;
    }

    if (!Completion.Normal.is(promiseCompletion)) {
      throw new StaticJsEngineError(
        "AsyncGenerator await return promise resolve did not complete with a normal completion.",
      );
    }

    const promise = promiseCompletion;

    // oxlint-disable-next-line typescript/no-this-alias
    const generator = this;

    const onFulfilled = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, value) {
      if (generator._generatorState !== "draining-queue") {
        throw new StaticJsEngineError(
          "AsyncGenerator onFulfilled called when generator is not draining queue.",
        );
      }

      const result = Completion.Normal(value);
      yield* generator._asyncGeneratorCompleteStep(result, true);
      yield* generator._asyncGeneratorDrainQueue();
      return realm.types.undefined;
    });

    const onRejected = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, reason) {
      if (generator._generatorState !== "draining-queue") {
        throw new StaticJsEngineError(
          "AsyncGenerator onRejected called when generator is not draining queue.",
        );
      }

      const result = Completion.Throw(reason);
      yield* generator._asyncGeneratorCompleteStep(result, true);
      yield* generator._asyncGeneratorDrainQueue();
      return realm.types.undefined;
    });

    yield* performPromiseThen(promise, onFulfilled, onRejected);
  }

  private *_asyncGeneratorDrainQueue(): EvaluationGenerator<void> {
    if (this._generatorState !== "draining-queue") {
      throw new StaticJsEngineError(
        "AsyncGenerator drain queue called when generator is not draining queue.",
      );
    }

    const { realm } = EvaluationContext.current;

    const queue = this._asyncGeneratorQueue;
    while (queue.length > 0) {
      const next = queue[0];
      let completion = next.completion;

      if (Completion.Return.is(completion)) {
        yield* this._asyncGeneratorAwaitReturn();
        return;
      }

      if (Completion.Normal.is(completion)) {
        completion = Completion.Normal(realm.types.undefined);
      }

      yield* this._asyncGeneratorCompleteStep(completion, true);
    }

    this._generatorState = "completed";
  }
}
