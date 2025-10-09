import hasOwnProperty from "../../internal/has-own-property.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import { isStaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPropertyDescriptorBase {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
}

export interface StaticJsDataPropertyDescriptor
  extends StaticJsPropertyDescriptorBase {
  readonly writable?: boolean;
  readonly value?: StaticJsValue;
}

export interface StaticJsAccessorPropertyDescriptor
  extends StaticJsPropertyDescriptorBase {
  get?: StaticJsFunction;
  set?: StaticJsFunction;
}

export type StaticJsPropertyDescriptor =
  | StaticJsDataPropertyDescriptor
  | StaticJsAccessorPropertyDescriptor;

export function validateStaticJsPropertyDescriptor(
  value: unknown,
): asserts value is StaticJsPropertyDescriptor {
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

export function isStaticJsDataPropertyDescriptor(
  value: unknown,
): value is StaticJsDataPropertyDescriptor {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "value") || hasOwnProperty(value, "writable");
}

export function isStaticJsAccessorPropertyDescriptor(
  value: unknown,
): value is StaticJsAccessorPropertyDescriptor {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "get") || hasOwnProperty(value, "set");
}
