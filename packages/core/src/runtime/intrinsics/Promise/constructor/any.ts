import { call } from "../../../../algorithms/call.js";
import { definePropertyOrThrow } from "../../../../algorithms/define-property-or-throw.js";
import { getPromiseResolve } from "../../../../algorithms/get-promise-resolve.js";
import { invoke } from "../../../../algorithms/invoke.js";
import { newPromiseCapability } from "../../../../algorithms/new-promise-capability.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsNativeFunctionImpl } from "../../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsCallable } from "../../../../types/StaticJsCallable.js";
import type { StaticJsPromiseCapabilityRecord } from "../../../../types/StaticJsPromise.js";
import type { StaticJsValue } from "../../../../types/StaticJsValue.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const promiseCtorAnyDeclaration: IntrinsicPropertyDeclaration = {
  key: "any",
  length: 1,
  *func(realm, thisArg, iterable = realm.types.undefined) {
    // Type cast guarded by newPromiseCapability.
    const constructor = thisArg as StaticJsCallable;

    const promiseCapability = yield* newPromiseCapability(constructor);

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
      performPromiseAny(iteratorRecord, constructor, promiseCapability, promiseResolve),
    );
    if (Completion.Abrupt.is(result)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [Completion.value(result)]);
      return promiseCapability.promise;
    }

    return result;
  },
};

function* performPromiseAny(
  iteratorRecord: StaticJsIteratorRecord,
  constructor: StaticJsCallable,
  resultCapability: StaticJsPromiseCapabilityRecord,
  promiseResolve: StaticJsCallable,
): EvaluationGenerator<StaticJsValue> {
  const { realm } = EvaluationContext.current;

  const errors: StaticJsValue[] = [];

  let remainingElementsCount = 1;
  let index = 0;

  while (true) {
    const next = yield* Q(iteratorStepValue(iteratorRecord));
    if (!next) {
      remainingElementsCount--;
      if (remainingElementsCount === 0) {
        const aggregateError = realm.types.error("AggregateError", "All promises were rejected");
        yield* definePropertyOrThrow(aggregateError, "errors", {
          value: realm.types.array(errors),
        });
        yield* call(resultCapability.reject, realm.types.undefined, [aggregateError]);
      }
      return resultCapability.promise;
    }

    errors.push(realm.types.undefined);

    const nextPromise = yield* call(promiseResolve, constructor, [next]);

    let alreadyCalled = false;
    const thisIndex = index;
    const onRejected = new StaticJsNativeFunctionImpl(
      realm,
      "",
      function* (_thisArg, error = realm.types.undefined) {
        if (alreadyCalled) {
          return realm.types.undefined;
        }

        alreadyCalled = true;

        errors[thisIndex] = error;

        remainingElementsCount--;
        if (remainingElementsCount === 0) {
          const aggregateError = realm.types.error("AggregateError", "All promises were rejected");
          yield* definePropertyOrThrow(aggregateError, "errors", {
            value: realm.types.array(errors),
          });
          yield* call(resultCapability.reject, realm.types.undefined, [aggregateError]);
        }

        return realm.types.undefined;
      },
    );

    index++;
    remainingElementsCount++;

    yield* invoke(nextPromise, "then", [resultCapability.resolve, onRejected]);
  }
}
