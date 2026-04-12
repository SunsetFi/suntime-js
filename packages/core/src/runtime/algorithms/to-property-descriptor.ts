import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import type { StaticJsPropertyDescriptorRecord } from "../types/StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import toBoolean from "./to-boolean.js";
import { get } from "./get.js";
import { isCallable } from "./is-callable.js";

export default function* toPropertyDescriptor(
  obj: StaticJsValue,
): EvaluationGenerator<StaticJsPropertyDescriptorRecord> {
  if (!isStaticJsObject(obj)) {
    throw Completion.Throw("TypeError", "Property description must be an object");
  }

  const desc: StaticJsPropertyDescriptorRecord = {};

  const hasEnumerable = yield* obj.hasPropertyEvaluator("enumerable");
  if (hasEnumerable) {
    const value = yield* get(obj, "enumerable");
    const enumerable = yield* toBoolean.js(value);
    desc.enumerable = enumerable;
  }

  const hasConfigurable = yield* obj.hasPropertyEvaluator("configurable");
  if (hasConfigurable) {
    const value = yield* get(obj, "configurable");
    const configurable = yield* toBoolean.js(value);
    desc.configurable = configurable;
  }

  const hasValue = yield* obj.hasPropertyEvaluator("value");
  if (hasValue) {
    const value = yield* get(obj, "value");
    desc.value = value;
  }

  const hasWritable = yield* obj.hasPropertyEvaluator("writable");
  if (hasWritable) {
    const value = yield* get(obj, "writable");
    const writable = yield* toBoolean.js(value);
    desc.writable = writable;
  }

  const hasGet = yield* obj.hasPropertyEvaluator("get");
  if (hasGet) {
    const getter = yield* get(obj, "get");
    if (isCallable(getter)) {
      desc.get = getter;
    } else if (!isStaticJsUndefined(getter)) {
      throw Completion.Throw("TypeError", "Getter must be a function");
    }
  }

  const hasSet = yield* obj.hasPropertyEvaluator("set");
  if (hasSet) {
    const setter = yield* get(obj, "set");
    if (isCallable(setter)) {
      desc.set = setter;
    } else if (!isStaticJsUndefined(setter)) {
      throw Completion.Throw("TypeError", "Setter must be a function");
    }
  }

  if (desc.get || desc.set) {
    if (desc.value || desc.writable != null) {
      throw Completion.Throw(
        "TypeError",
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
    }
  }

  return desc;
}
