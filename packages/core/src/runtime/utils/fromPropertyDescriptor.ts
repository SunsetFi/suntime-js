import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsPlainObject } from "../types/StaticJsPlainObject.js";

import {
  type StaticJsDataPropertyDescriptor,
  type StaticJsAccessorPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "../types/StaticJsPropertyDescriptor.js";
import { StaticJsUndefined } from "../types/StaticJsUndefined.js";

type StaticJsPropertyDescriptorKeys =
  | keyof StaticJsDataPropertyDescriptor
  | keyof StaticJsAccessorPropertyDescriptor;

export function fromPropertyDescriptor(
  descriptor: StaticJsPropertyDescriptorRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPlainObject>;
export function fromPropertyDescriptor(
  descriptor: StaticJsPropertyDescriptorRecord | undefined,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPlainObject | StaticJsUndefined>;
export function* fromPropertyDescriptor(
  descriptor: StaticJsPropertyDescriptorRecord | undefined,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPlainObject | StaticJsUndefined> {
  if (descriptor === undefined) {
    return realm.types.undefined;
  }

  const properties: Partial<Record<StaticJsPropertyDescriptorKeys, StaticJsPropertyDescriptor>> =
    {};

  if (descriptor.enumerable !== undefined) {
    properties["enumerable"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: realm.types.boolean(descriptor.enumerable ?? false),
    };
  }

  if (descriptor.configurable !== undefined) {
    properties["configurable"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: realm.types.boolean(descriptor.configurable ?? false),
    };
  }

  if (descriptor.get !== undefined) {
    properties["get"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: descriptor.get,
    };
  }
  if (descriptor.set !== undefined) {
    properties["set"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: descriptor.set,
    };
  }

  if (descriptor.value !== undefined) {
    properties["value"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: descriptor.value,
    };
  }
  if (descriptor.writable !== undefined) {
    properties["writable"] = {
      enumerable: true,
      writable: true,
      configurable: true,
      value: realm.types.boolean(descriptor.writable ?? false),
    };
  }

  return realm.types.object(properties);
}
