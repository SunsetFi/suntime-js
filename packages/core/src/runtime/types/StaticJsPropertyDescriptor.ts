import hasOwnProperty from "../../internal/has-own-property.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import { isStaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsGenericPropertyDescriptor {
  readonly configurable: boolean;
  readonly enumerable: boolean;
}

export interface StaticJsDataPropertyDescriptor extends StaticJsGenericPropertyDescriptor {
  readonly writable: boolean;
  readonly value: StaticJsValue;
}

export interface StaticJsAccessorPropertyDescriptor extends StaticJsGenericPropertyDescriptor {
  get: StaticJsFunction | undefined;
  set: StaticJsFunction | undefined;
}

export type StaticJsPropertyDescriptor =
  | StaticJsGenericPropertyDescriptor
  | StaticJsDataPropertyDescriptor
  | StaticJsAccessorPropertyDescriptor;

export function validatePartialStaticJsPropertyDescriptor(
  value: unknown,
): asserts value is Partial<StaticJsPropertyDescriptor> {
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

export function isStaticJsGenericPropertyDescriptor(
  value: unknown,
): value is StaticJsGenericPropertyDescriptor {
  if (!value || typeof value !== "object") {
    return false;
  }

  return !isStaticJsAccessorPropertyDescriptor(value) && !isStaticJsDataPropertyDescriptor(value);
}

export function isStaticJsDataPropertyDescriptor(
  value: unknown,
): value is Partial<StaticJsDataPropertyDescriptor> {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "value") || hasOwnProperty(value, "writable");
}

export function isStaticJsAccessorPropertyDescriptor(
  value: unknown,
): value is Partial<StaticJsAccessorPropertyDescriptor> {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "get") || hasOwnProperty(value, "set");
}
