import { hasOwnProperty } from "../../utils/has-own-property.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import { isStaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsDataPropertyDescriptor {
  readonly configurable: boolean;
  readonly enumerable: boolean;
  readonly writable: boolean;
  readonly value: StaticJsValue;
}

export interface StaticJsAccessorPropertyDescriptor {
  readonly configurable: boolean;
  readonly enumerable: boolean;
  readonly get: StaticJsFunction | undefined;
  readonly set: StaticJsFunction | undefined;
}

export type StaticJsPropertyDescriptor =
  | StaticJsDataPropertyDescriptor
  | StaticJsAccessorPropertyDescriptor;

export interface StaticJsPropertyDescriptorRecord {
  configurable?: boolean;
  enumerable?: boolean;
  value?: StaticJsValue;
  writable?: boolean;
  get?: StaticJsFunction | undefined;
  set?: StaticJsFunction | undefined;
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

  if (hasGet && !isStaticJsFunction(value.get)) {
    throw new TypeError("get must be a StaticJsFunction.");
  }

  if (hasSet && !isStaticJsFunction(value.set)) {
    throw new TypeError("set must be a StaticJsFunction.");
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
