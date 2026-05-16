import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { dropUndefined } from "../../utils/drop-undefined.js";
import { hasOwnProperty } from "../../utils/has-own-property.js";
import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsCallable, type StaticJsCallable } from "./StaticJsCallable.js";
import { StaticJsPlainObject } from "./StaticJsPlainObject.js";
import { StaticJsUndefined } from "./StaticJsUndefined.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsDataPropertyDescriptor {
  configurable: boolean;
  enumerable: boolean;
  writable: boolean;
  value: StaticJsValue;
}

export interface StaticJsAccessorPropertyDescriptor {
  configurable: boolean;
  enumerable: boolean;
  get: StaticJsCallable | undefined;
  set: StaticJsCallable | undefined;
}

export type StaticJsPropertyDescriptor =
  | StaticJsDataPropertyDescriptor
  | StaticJsAccessorPropertyDescriptor;

export interface StaticJsPropertyDescriptorRecord {
  configurable?: boolean;
  enumerable?: boolean;
  value?: StaticJsValue;
  writable?: boolean;
  get?: StaticJsCallable | undefined;
  set?: StaticJsCallable | undefined;
}

export function validateStaticJsPropertyDescriptorRecord(
  value: unknown,
): asserts value is StaticJsPropertyDescriptorRecord {
  if (!value || typeof value !== "object") {
    throw new TypeError("Property description must be an object.");
  }

  const hasWritable = hasOwnProperty(value, "writable");
  const hasValue = hasOwnProperty(value, "value");
  const hasGet = hasOwnProperty(value, "get") && value.get !== undefined;
  const hasSet = hasOwnProperty(value, "set") && value.set !== undefined;

  const hasAccessor = hasGet || hasSet;

  if (hasAccessor && (hasWritable || hasValue)) {
    throw new TypeError(
      "Invalid property descriptor.  Cannot both specify accessors and a value or writable attribute",
    );
  }

  if (hasValue && !isStaticJsValue(value.value)) {
    throw new TypeError("value must be a StaticJsValue.");
  }

  if (hasGet && !isStaticJsCallable(value.get)) {
    throw new TypeError("get must be a StaticJsCallable.");
  }

  if (hasSet && !isStaticJsCallable(value.set)) {
    throw new TypeError("set must be a StaticJsCallable.");
  }
}

export function isStaticJsGenericPropertyDescriptor(value: unknown): value is Pick<
  StaticJsPropertyDescriptorRecord,
  "configurable" | "enumerable"
> & {
  get: never;
  set: never;
  value: never;
  writable: never;
} {
  if (!value || typeof value !== "object") {
    return false;
  }

  return !isStaticJsAccessorPropertyDescriptor(value) && !isStaticJsDataPropertyDescriptor(value);
}

export function isStaticJsDataPropertyDescriptor(
  value: StaticJsPropertyDescriptor,
): value is StaticJsDataPropertyDescriptor;
export function isStaticJsDataPropertyDescriptor(
  value: unknown,
): value is StaticJsPropertyDescriptorRecord &
  (
    | Required<Pick<StaticJsPropertyDescriptorRecord, "value">>
    | Required<Pick<StaticJsPropertyDescriptorRecord, "writable">>
  );
export function isStaticJsDataPropertyDescriptor(value: unknown): boolean {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "value") || hasOwnProperty(value, "writable");
}

export function isStaticJsAccessorPropertyDescriptor(
  value: StaticJsPropertyDescriptor,
): value is StaticJsAccessorPropertyDescriptor;
export function isStaticJsAccessorPropertyDescriptor(
  value: unknown,
): value is StaticJsPropertyDescriptorRecord &
  (
    | Required<Pick<StaticJsPropertyDescriptorRecord, "get">>
    | Required<Pick<StaticJsPropertyDescriptorRecord, "set">>
  );
export function isStaticJsAccessorPropertyDescriptor(value: unknown): boolean {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "get") || hasOwnProperty(value, "set");
}

type StaticJsPropertyDescriptorKeys =
  | keyof StaticJsDataPropertyDescriptor
  | keyof StaticJsAccessorPropertyDescriptor;

export function propertyDescriptorToStaticJsObject(
  descriptor: StaticJsPropertyDescriptorRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPlainObject>;
export function propertyDescriptorToStaticJsObject(
  descriptor: StaticJsPropertyDescriptorRecord | undefined,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPlainObject | StaticJsUndefined>;
export function* propertyDescriptorToStaticJsObject(
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

export function propertyDescriptortoNative(
  descriptor: StaticJsPropertyDescriptor,
  realm: StaticJsRealm,
): PropertyDescriptor {
  const objDescriptor: PropertyDescriptor = dropUndefined({
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
  });

  if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
    const { get, set } = descriptor;
    if (get) {
      objDescriptor.get = function () {
        const thisArg = realm.types.toStaticJsValue(this);
        const result = get.callSync(thisArg);
        return result.toNative();
      };
    }
    if (set) {
      objDescriptor.set = function (value: unknown) {
        const thisArg = realm.types.toStaticJsValue(this);
        const staticJsValue = realm.types.toStaticJsValue(value);
        set.callSync(thisArg, [staticJsValue]);
      };
    }
  } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
    const { writable, value } = descriptor;
    if (writable !== undefined) {
      objDescriptor.writable = writable;
    }

    if (value !== undefined) {
      objDescriptor.value = value.toNative();
    }
  }

  return objDescriptor;
}
