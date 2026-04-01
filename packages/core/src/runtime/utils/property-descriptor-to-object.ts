import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";

import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  type StaticJsDataPropertyDescriptor,
  type StaticJsAccessorPropertyDescriptor,
  type StaticJsPropertyDescriptor,
} from "../types/StaticJsPropertyDescriptor.js";

type StaticJsPropertyDescriptorKeys =
  | keyof StaticJsDataPropertyDescriptor
  | keyof StaticJsAccessorPropertyDescriptor;

export function* propertyDescriptorToObject(
  descriptor: StaticJsPropertyDescriptor,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  const properties: Partial<Record<StaticJsPropertyDescriptorKeys, StaticJsPropertyDescriptor>> = {
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
  };

  if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
    if (descriptor.get) {
      properties["get"] = {
        enumerable: true,
        writable: true,
        configurable: true,
        value: descriptor.get,
      };
    }
    if (descriptor.set) {
      properties["set"] = {
        enumerable: true,
        writable: true,
        configurable: true,
        value: descriptor.set,
      };
    }
  } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
    properties["value"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: descriptor.value,
    };
    properties["writable"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: realm.types.boolean(descriptor.writable ?? false),
    };
  }

  return realm.types.object(properties);
}
