import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { call } from "../../../algorithms/call.js";
import { createDataPropertyOrThrow } from "../../../algorithms/create-data-property-or-throw.js";
import { getPromiseResolve } from "../../../algorithms/get-promise-resolve.js";
import { invoke } from "../../../algorithms/invoke.js";
import { newPromiseCapability } from "../../../algorithms/new-promise-capability.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { StaticJsPromiseCapabilityRecord } from "../../../types/StaticJsPromise.js";
import { StaticJsValue } from "../../../types/StaticJsValue.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const promiseCtorAllSettledDeclaration: IntrinsicPropertyDeclaration = {
  key: "allSettled",
  *func(realm, thisArg, iterable = realm.types.undefined) {
    // Type guarded by newPromiseCapability
    const constructor = thisArg as StaticJsCallable;
    const promiseCapability = yield* Q(newPromiseCapability(constructor));

    const promiseResolve = yield* captureThrownCompletion(getPromiseResolve(constructor));
    if (Completion.Abrupt.is(promiseResolve)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [
        Completion.value(promiseResolve),
      ]);
      return promiseCapability.promise;
    }

    const iteratorRecord = yield* captureThrownCompletion(getIterator(iterable, "sync"));
    if (Completion.Abrupt.is(iteratorRecord)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [
        Completion.value(iteratorRecord),
      ]);
      return promiseCapability.promise;
    }

    const result = yield* captureThrownCompletion(
      performPromiseAllSettled(iteratorRecord, constructor, promiseCapability, promiseResolve),
    );
    if (Completion.Abrupt.is(result)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [Completion.value(result)]);
      return promiseCapability.promise;
    }

    return result;
  },
};

function* performPromiseAllSettled(
  iteratorRecord: StaticJsIteratorRecord,
  constructor: StaticJsCallable,
  resultCapability: StaticJsPromiseCapabilityRecord,
  promiseResolve: StaticJsCallable,
): EvaluationGenerator<StaticJsValue> {
  const { realm } = EvaluationContext.current;

  const values: StaticJsValue[] = [];

  let remainingElementCount = 1;
  let index = 0;

  while (true) {
    const next = yield* Q(iteratorStepValue(iteratorRecord));
    if (!next) {
      remainingElementCount--;
      if (remainingElementCount === 0) {
        const valuesArray = realm.types.array(values);
        yield* call(resultCapability.resolve, realm.types.undefined, [valuesArray]);
      }
      return resultCapability.promise;
    }

    values.push(realm.types.undefined);

    const nextPromise = yield* call(promiseResolve, constructor, [next]);

    let alreadyCalled = false;
    const thisIndex = index;
    const onFulfilled = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, value) {
      if (alreadyCalled) {
        return realm.types.undefined;
      }
      alreadyCalled = true;

      const obj = realm.types.object();
      yield* createDataPropertyOrThrow(obj, "status", realm.types.string("fulfilled"));
      yield* createDataPropertyOrThrow(obj, "value", value);
      values[thisIndex] = obj;

      remainingElementCount--;
      if (remainingElementCount === 0) {
        const valuesArray = realm.types.array(values);
        yield* call(resultCapability.resolve, realm.types.undefined, [valuesArray]);
      }

      return realm.types.undefined;
    });

    const onRejected = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, reason) {
      if (alreadyCalled) {
        return realm.types.undefined;
      }
      alreadyCalled = true;

      const obj = realm.types.object();
      yield* createDataPropertyOrThrow(obj, "status", realm.types.string("rejected"));
      yield* createDataPropertyOrThrow(obj, "reason", reason);
      values[thisIndex] = obj;

      remainingElementCount--;

      if (remainingElementCount === 0) {
        const valuesArray = realm.types.array(values);
        yield* call(resultCapability.resolve, realm.types.undefined, [valuesArray]);
      }

      return realm.types.undefined;
    });

    index++;
    remainingElementCount++;

    yield* invoke(nextPromise, "then", [onFulfilled, onRejected]);
  }
}
