import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { call } from "../../../algorithms/call.js";
import { getMethod } from "../../../algorithms/get-method.js";
import { newPromiseCapability } from "../../../algorithms/new-promise-capability.js";
import { asyncFromSyncIteratorContinuation } from "../../../iterators/async-from-sync-iterator-continuation.js";
import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorNext } from "../../../iterators/iterator-next.js";
import { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { isStaticJsObject } from "../../StaticJsObject.js";
import { StaticJsPromise } from "../../StaticJsPromise.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export class StaticJsAsyncFromSyncIterator extends StaticJsOrdinaryObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _syncIteratorRecord: StaticJsIteratorRecord,
  ) {
    super(realm, realm.types.prototypes.asyncFromSyncIteratorProto);
  }

  get runtimeTypeOf() {
    return "async-iterator";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.AsyncIterator;
  }

  *nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* newPromiseCapability(this.realm.intrinsics.Promise);
    const syncIteratorRecord = this._syncIteratorRecord;

    let result: Completion;
    if (value) {
      result = yield* captureThrownCompletion(iteratorNext(syncIteratorRecord, value));
    } else {
      result = yield* captureThrownCompletion(iteratorNext(syncIteratorRecord));
    }

    if (Completion.Abrupt.is(result)) {
      yield* call(promiseCapability.reject, this.realm.types.undefined, [Completion.value(result)]);
      return promiseCapability.promise;
    }

    return yield* asyncFromSyncIteratorContinuation(
      result,
      promiseCapability,
      syncIteratorRecord,
      true,
    );
  }

  *returnEvaluator(value?: StaticJsValue) {
    const promiseCapability = yield* newPromiseCapability(this.realm.intrinsics.Promise);
    const syncIteratorRecord = this._syncIteratorRecord;
    const syncIterator = syncIteratorRecord.iterator;

    const returnMethod = yield* captureThrownCompletion(getMethod(syncIterator, "return"));
    if (Completion.Abrupt.is(returnMethod)) {
      yield* call(promiseCapability.reject, this.realm.types.undefined, [
        Completion.value(returnMethod),
      ]);
      return promiseCapability.promise;
    }

    if (!returnMethod) {
      // SPEC WEIRDNESS: Spec says value is optional, but says CreateIteratorResultObject it is not optional,
      // but calls this without bothering to check or set value.
      const iteratorResult = yield* createIteratorResultObject(
        value ?? this.realm.types.undefined,
        true,
      );
      yield* call(promiseCapability.resolve, this.realm.types.undefined, [iteratorResult]);
      return promiseCapability.promise;
    }

    let result: Completion;
    if (value) {
      result = yield* captureThrownCompletion(call(returnMethod, syncIterator, [value]));
    } else {
      result = yield* captureThrownCompletion(call(returnMethod, syncIterator));
    }

    if (Completion.Abrupt.is(result)) {
      yield* call(promiseCapability.reject, this.realm.types.undefined, [Completion.value(result)]);
      return promiseCapability.promise;
    }

    if (!isStaticJsObject(result)) {
      yield* call(promiseCapability.reject, this.realm.types.undefined, [
        this.realm.types.error("TypeError", "Iterator return did not return an object."),
      ]);
      return promiseCapability.promise;
    }

    return yield* asyncFromSyncIteratorContinuation(
      result,
      promiseCapability,
      syncIteratorRecord,
      false,
    );
  }

  *throwEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise> {
    const promiseCapability = yield* newPromiseCapability(this.realm.intrinsics.Promise);
    const syncIteratorRecord = this._syncIteratorRecord;
    const syncIterator = syncIteratorRecord.iterator;

    const throwMethod = yield* captureThrownCompletion(getMethod(syncIterator, "throw"));
    if (Completion.Abrupt.is(throwMethod)) {
      yield* call(promiseCapability.reject, this.realm.types.undefined, [
        Completion.value(throwMethod),
      ]);
      return promiseCapability.promise;
    }

    if (!throwMethod) {
      const closeCompletion = Completion.Normal(null);
      const result = yield* captureThrownCompletion(
        iteratorClose(syncIteratorRecord, closeCompletion),
      );
      if (Completion.Abrupt.is(result)) {
        yield* call(promiseCapability.reject, this.realm.types.undefined, [
          Completion.value(result),
        ]);
        return promiseCapability.promise;
      }

      yield* call(promiseCapability.reject, this.realm.types.undefined, [
        this.realm.types.error("TypeError", "Iterator does not have a throw method."),
      ]);
      return promiseCapability.promise;
    }

    let result: Completion;
    if (value) {
      result = yield* captureThrownCompletion(call(throwMethod, syncIterator, [value]));
    } else {
      result = yield* captureThrownCompletion(call(throwMethod, syncIterator));
    }

    if (Completion.Abrupt.is(result)) {
      yield* call(promiseCapability.reject, this.realm.types.undefined, [Completion.value(result)]);
      return promiseCapability.promise;
    }

    if (!isStaticJsObject(result)) {
      yield* call(promiseCapability.reject, this.realm.types.undefined, [
        this.realm.types.error("TypeError", "Iterator.throw did not return an object."),
      ]);
      return promiseCapability.promise;
    }

    return yield* asyncFromSyncIteratorContinuation(
      result,
      promiseCapability,
      syncIteratorRecord,
      true,
    );
  }
}
