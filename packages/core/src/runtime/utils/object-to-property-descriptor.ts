import type { Writable } from "type-fest";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type {
  StaticJsPropertyDescriptor,
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
} from "../types/StaticJsPropertyDescriptor.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import toBoolean from "../algorithms/to-boolean.js";

export default function* objectToPropertyDescriptor(
  obj: StaticJsObjectLike,
  realm: StaticJsRealm,
): EvaluationGenerator<Partial<StaticJsPropertyDescriptor>> {
  let enumerable: boolean | undefined;
  const hasEnumerable = yield* obj.hasPropertyEvaluator("enumerable");
  if (hasEnumerable) {
    const enumerableValue = yield* obj.getEvaluator("enumerable");
    enumerable = yield* toBoolean.js(enumerableValue, realm);
  }

  let configurable: boolean | undefined;
  const hasConfigurable = yield* obj.hasPropertyEvaluator("configurable");
  if (hasConfigurable) {
    const configurableValue = yield* obj.getEvaluator("configurable");
    configurable = yield* toBoolean.js(configurableValue, realm);
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
    const value = yield* obj.getEvaluator("value");
    descriptor.value = value;
  }

  const hasWritable = yield* obj.hasPropertyEvaluator("writable");
  if (hasWritable) {
    const writableValue = yield* obj.getEvaluator("writable");
    descriptor.writable = yield* toBoolean.js(writableValue, realm);
  }

  const hasGetter = yield* obj.hasPropertyEvaluator("get");
  if (hasGetter) {
    const getter = yield* obj.getEvaluator("get");
    if (!isStaticJsFunction(getter)) {
      throw new ThrowCompletion(realm.types.error("TypeError", `get must be a function`));
    }

    descriptor.get = getter;
  }

  const hasSetter = yield* obj.hasPropertyEvaluator("set");
  if (hasSetter) {
    const setter = yield* obj.getEvaluator("set");
    if (!isStaticJsFunction(setter)) {
      throw new ThrowCompletion(realm.types.error("TypeError", `set must be a function`));
    }

    descriptor.set = setter;
  }

  return descriptor;
}
