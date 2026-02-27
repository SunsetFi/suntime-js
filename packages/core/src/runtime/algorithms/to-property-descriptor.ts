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
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import toBoolean from "./to-boolean.js";

export default function* toPropertyDescriptor(
  obj: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<Partial<StaticJsPropertyDescriptor>> {
  if (!isStaticJsObjectLike(obj)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Property description must be an object"),
    );
  }

  const desc: Writable<
    Partial<StaticJsAccessorPropertyDescriptor & StaticJsDataPropertyDescriptor>
  > = {};

  const hasEnumerable = yield* obj.hasPropertyEvaluator("enumerable");
  if (hasEnumerable) {
    const value = yield* obj.getEvaluator("enumerable");
    const enumerable = yield* toBoolean.js(value, realm);
    desc.enumerable = enumerable;
  }

  const hasConfigurable = yield* obj.hasPropertyEvaluator("configurable");
  if (hasConfigurable) {
    const value = yield* obj.getEvaluator("configurable");
    const configurable = yield* toBoolean.js(value, realm);
    desc.configurable = configurable;
  }

  const hasValue = yield* obj.hasPropertyEvaluator("value");
  if (hasValue) {
    const value = yield* obj.getEvaluator("value");
    desc.value = value;
  }

  const hasWritable = yield* obj.hasPropertyEvaluator("writable");
  if (hasWritable) {
    const value = yield* obj.getEvaluator("writable");
    const writable = yield* toBoolean.js(value, realm);
    desc.writable = writable;
  }

  const hasGet = yield* obj.hasPropertyEvaluator("get");
  if (hasGet) {
    const getter = yield* obj.getEvaluator("get");
    if (isStaticJsFunction(getter)) {
      desc.get = getter;
    } else if (!isStaticJsUndefined(getter)) {
      throw new ThrowCompletion(realm.types.error("TypeError", "Getter must be a function"));
    }
  }

  const hasSet = yield* obj.hasPropertyEvaluator("set");
  if (hasSet) {
    const setter = yield* obj.getEvaluator("set");
    if (isStaticJsFunction(setter)) {
      desc.set = setter;
    } else if (!isStaticJsUndefined(setter)) {
      throw new ThrowCompletion(realm.types.error("TypeError", "Setter must be a function"));
    }
  }

  if (desc.get || desc.set) {
    if (desc.value || desc.writable != null) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
        ),
      );
    }
  }

  return desc;
}
