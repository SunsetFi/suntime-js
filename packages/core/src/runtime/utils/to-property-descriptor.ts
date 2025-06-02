import type { Writable } from "type-fest";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type {
  StaticJsPropertyDescriptor,
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
} from "../types/StaticJsPropertyDescriptor.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsObjectLike } from "../types/StaticJsObject.js";
import toBoolean from "../algorithms/to-boolean.js";

export default function* toPropertyDescriptor(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
): EvaluationGenerator<StaticJsPropertyDescriptor | ThrowCompletion> {
  let enumerable: boolean | undefined;
  const hasEnumerable = yield* obj.hasPropertyEvaluator("enumerable");
  if (hasEnumerable) {
    let enumerableValue = yield* obj.getPropertyEvaluator("enumerable");
    enumerableValue = yield* toBoolean(enumerableValue, realm);
    enumerable = enumerableValue.value;
  }

  let configurable: boolean | undefined;
  const hasConfigurable = yield* obj.hasPropertyEvaluator("configurable");
  if (hasConfigurable) {
    let configurableValue = yield* obj.getPropertyEvaluator("configurable");
    configurableValue = yield* toBoolean(configurableValue, realm);
    configurable = configurableValue.value;
  }

  // For the sake of not duplicating error handling, we will intentionally allow this to
  // make invalid mixes of data and accessor properties.
  // This will be checked and caught by StaticJsObjectLike.defineProperty when it is used.
  const descriptor: Writable<
    Partial<StaticJsAccessorPropertyDescriptor & StaticJsDataPropertyDescriptor>
  > = {};

  if (configurable !== undefined) {
    descriptor.configurable = configurable;
  }

  if (enumerable !== undefined) {
    descriptor.enumerable = enumerable;
  }

  const hasValue = yield* obj.hasPropertyEvaluator("value");
  if (hasValue) {
    const value = yield* obj.getPropertyEvaluator("value");
    descriptor.value = value;
  }

  const hasWritable = yield* obj.hasPropertyEvaluator("writable");
  if (hasWritable) {
    let writableValue = yield* obj.getPropertyEvaluator("writable");
    writableValue = yield* toBoolean(writableValue, realm);
    descriptor.writable = writableValue.value;
  }

  const hasGetter = yield* obj.hasPropertyEvaluator("get");
  if (hasGetter) {
    const getter = yield* obj.getPropertyEvaluator("get");
    if (!isStaticJsFunction(getter)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", `get must be a function`),
      );
    }

    descriptor.get = getter;
  }

  const hasSetter = yield* obj.hasPropertyEvaluator("set");
  if (hasSetter) {
    const setter = yield* obj.getPropertyEvaluator("set");
    if (!isStaticJsFunction(setter)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", `set must be a function`),
      );
    }

    descriptor.set = setter;
  }

  return descriptor;
}
