import { Writable } from "type-fest";
import EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import { StaticJsRealm } from "../realm/index.js";
import {
  isStaticJsFunction,
  StaticJsObjectLike,
  StaticJsPropertyDescriptor,
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
} from "../types/index.js";

export default function* toPropertyDescriptor(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
): EvaluationGenerator<StaticJsPropertyDescriptor | ThrowCompletion> {
  let enumerable: boolean | undefined;
  const hasEnumerable = yield* obj.hasPropertyEvaluator("enumerable");
  if (hasEnumerable) {
    const enumerableValue = yield* obj.getPropertyEvaluator("enumerable");
    enumerable = enumerableValue.toBoolean();
  }

  let configurable: boolean | undefined;
  const hasConfigurable = yield* obj.hasPropertyEvaluator("configurable");
  if (hasConfigurable) {
    const configurableValue = yield* obj.getPropertyEvaluator("configurable");
    configurable = configurableValue.toBoolean();
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
    const writableValue = yield* obj.getPropertyEvaluator("writable");
    descriptor.writable = writableValue.toBoolean();
  }

  const hasGetter = yield* obj.hasPropertyEvaluator("get");
  if (hasGetter) {
    const getter = yield* obj.getPropertyEvaluator("get");
    if (!isStaticJsFunction(getter)) {
      return ThrowCompletion(
        realm.types.error("TypeError", `get must be a function`),
      );
    }

    descriptor.get = getter;
  }

  const hasSetter = yield* obj.hasPropertyEvaluator("set");
  if (hasSetter) {
    const setter = yield* obj.getPropertyEvaluator("set");
    if (!isStaticJsFunction(setter)) {
      return ThrowCompletion(
        realm.types.error("TypeError", `set must be a function`),
      );
    }

    descriptor.set = setter;
  }

  return descriptor;
}
