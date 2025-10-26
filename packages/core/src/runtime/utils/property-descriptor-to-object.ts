import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
} from "../types/StaticJsPropertyDescriptor.js";

export default function* propertyDescriptorToObject(
  descriptor: StaticJsPropertyDescriptor,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  const result = realm.types.object({
    enumerable: {
      enumerable: true,
      writable: true,
      configurable: true,
      value: realm.types.boolean(descriptor.enumerable ?? false),
    },
    configurable: {
      enumerable: true,
      writable: true,
      configurable: true,
      value: realm.types.boolean(descriptor.configurable ?? false),
    },
  });

  if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
    if (descriptor.get) {
      yield* result.definePropertyEvaluator("get", {
        enumerable: true,
        writable: true,
        configurable: true,
        value: descriptor.get,
      });
    }
    if (descriptor.set) {
      yield* result.definePropertyEvaluator("set", {
        enumerable: true,
        writable: true,
        configurable: true,
        value: descriptor.set,
      });
    }
  } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
    yield* result.definePropertyEvaluator("value", {
      enumerable: true,
      writable: true,
      configurable: true,
      value: descriptor.value,
    });
    yield* result.definePropertyEvaluator("writable", {
      enumerable: true,
      writable: true,
      configurable: true,
      value: realm.types.boolean(descriptor.writable ?? false),
    });
  }

  return result;
}
