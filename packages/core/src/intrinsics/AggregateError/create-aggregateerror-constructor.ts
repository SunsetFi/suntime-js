import { createArrayFromList } from "../../algorithms/create-array-from-list.js";
import { createNonEnumerableDataPropertyOrThrow } from "../../algorithms/create-non-enumerable-data-property-or-throw.js";
import { definePropertyOrThrow } from "../../algorithms/define-property-or-throw.js";
import { installErrorCause } from "../../algorithms/install-error-cause.js";
import { ordinaryCreateFromConstructor } from "../../algorithms/ordinary-create-from-constructor.js";
import { toString } from "../../algorithms/to-string.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { getIterator } from "../../iterators/get-iterator.js";
import { iteratorToList } from "../../iterators/iterator-to-list.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsCallable } from "../../types/StaticJsCallable.js";
import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

export function* createAggregateErrorConstructor(
  realm: StaticJsRealm,
  proto: StaticJsObject,
): EvaluationGenerator<StaticJsFunction> {
  function* construct(
    newTarget: StaticJsCallable,
    errors: StaticJsValue,
    message: StaticJsValue,
    options: StaticJsValue,
  ) {
    const obj = yield* ordinaryCreateFromConstructor(newTarget, "AggregateError.prototype");

    if (!isStaticJsUndefined(message)) {
      const msg = yield* toString(message);
      yield* createNonEnumerableDataPropertyOrThrow(obj, "message", msg);
    }

    yield* installErrorCause(obj, options);

    const errorIterator = yield* getIterator(errors, "sync");
    const errorsList = yield* iteratorToList(errorIterator);
    const errorsValue = yield* createArrayFromList(errorsList);
    yield* definePropertyOrThrow(obj, "errors", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: errorsValue,
    });

    return obj;
  }
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "AggregateError",
    function* (
      _thisArg,
      errors = realm.types.undefined,
      message = realm.types.undefined,
      options = realm.types.undefined,
    ) {
      return yield* construct(EvaluationContext.current.function!, errors, message, options);
    },
    {
      construct: function* (
        newTarget,
        errors = realm.types.undefined,
        message = realm.types.undefined,
        options = realm.types.undefined,
      ) {
        return yield* construct(newTarget, errors, message, options);
      },
      length: 2,
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: proto,
  });

  yield* proto.defineOwnPropertyEvaluator("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
