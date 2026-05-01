import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { call } from "../../../algorithms/call.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { getPromiseResolve } from "../../../algorithms/get-promise-resolve.js";
import { invoke } from "../../../algorithms/invoke.js";
import { isConstructor } from "../../../algorithms/is-constructor.js";
import { newPromiseCapability } from "../../../algorithms/new-promise-capability.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { StaticJsPromiseCapabilityRecord } from "../../../types/StaticJsPromise.js";
import { StaticJsValue } from "../../../types/StaticJsValue.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const promiseCtorAllDeclaration: IntrinsicPropertyDeclaration = {
  key: "all",
  length: 1,
  *func(realm, thisArg, iterable = realm.types.undefined) {
    const c = thisArg;
    if (!isConstructor(c)) {
      throw Completion.Throw("TypeError", "Promise constructor must be a constructor");
    }

    const promiseCapability = yield* newPromiseCapability(c, realm);
    const promiseResolve = yield* captureThrownCompletion(getPromiseResolve(c));
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

    // TODO: Rest of the owl.
    const result = yield* captureThrownCompletion(
      performPromiseAll(iteratorRecord, c, promiseCapability, promiseResolve),
    );
    if (Completion.Abrupt.is(result)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [Completion.value(result)]);
      return promiseCapability.promise;
    }
    return result;
  },
};

function* performPromiseAll(
  iteratorRecord: StaticJsIteratorRecord,
  constructor: StaticJsCallable,
  resultCapability: StaticJsPromiseCapabilityRecord,
  promiseResolve: StaticJsCallable,
): EvaluationGenerator<StaticJsValue> {
  const { realm } = EvaluationContext.current;
  const values: StaticJsValue[] = [];

  let remainingElementsCount = 1;
  let index = 0;

  while (true) {
    const next = yield* iteratorStepValue(iteratorRecord);
    if (!next) {
      remainingElementsCount--;
      if (remainingElementsCount === 0) {
        const valuesArray = yield* createArrayFromList(values);
        yield* call(resultCapability.resolve, realm.types.undefined, [valuesArray]);
      }
      return resultCapability.promise;
    }

    values.push(realm.types.undefined);
    const nextPromise = yield* call(promiseResolve, constructor, [next]);
    let alreadyCalled = false;
    let thisIndex = index;
    const onFulfilled = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, value) {
      if (alreadyCalled) {
        return realm.types.undefined;
      }
      alreadyCalled = true;
      values[thisIndex] = value;
      remainingElementsCount--;
      if (remainingElementsCount === 0) {
        const valuesArray = yield* createArrayFromList(values);
        return yield* call(resultCapability.resolve, realm.types.undefined, [valuesArray]);
      }
      return realm.types.undefined;
    });
    index++;
    remainingElementsCount++;
    yield* invoke(nextPromise, "then", [onFulfilled, resultCapability.reject]);
  }
}
