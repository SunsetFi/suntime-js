import hasOwnProperty from "../../../internal/has-own-property.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsObject<TTypeSymbol extends string = "object">
  extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: TTypeSymbol;

  hasProperty(name: string): boolean;

  getProperty(name: string): StaticJsValue;

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined;

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void;

  getIsReadOnlyProperty(name: string): boolean;

  setProperty(name: string, value: StaticJsValue): void;

  deleteProperty(name: string): boolean;

  enumerateKeys(): string[];
}

export function isStaticJsObject(value: any): value is StaticJsObject {
  if (!value || typeof value !== "object") {
    return false;
  }

  return value[StaticJsTypeSymbol] === "object";
}

export function isStaticJsObjectLike(value: any): value is StaticJsObject {
  if (!value || typeof value !== "object") {
    return false;
  }

  return ["object", "array", "function"].includes(value[StaticJsTypeSymbol]);
}

export interface StaticJsObjectPropertyDescriptorBase {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  readonly writable?: boolean;
  set?(value: StaticJsValue): void;
}
export interface StaticJsObjectPropertyDescriptorValue
  extends StaticJsObjectPropertyDescriptorBase {
  readonly value?: StaticJsValue;
}

export interface StaticJsObjectPropertyDescriptorGetter
  extends StaticJsObjectPropertyDescriptorBase {
  readonly get?: () => StaticJsValue;
}

export type StaticJsObjectPropertyDescriptor =
  | StaticJsObjectPropertyDescriptorValue
  | StaticJsObjectPropertyDescriptorGetter;

export function validateStaticJsObjectPropertyDescriptor(
  value: any,
): asserts value is StaticJsObjectPropertyDescriptor {
  if (!value || typeof value !== "object") {
    throw new Error("StaticJsObjectPropertyDescriptor must be an object.");
  }

  const hasValue = hasOwnProperty(value, "value");
  const hasGet = hasOwnProperty(value, "get");

  if (hasValue && hasGet) {
    throw new Error(
      "StaticJsObjectPropertyDescriptor cannot have both value and get.",
    );
  }

  // We could go even further and ensure get is a function but /shrug.
}

export function isStaticJsObjectPropertyDescriptorValue(
  value: any,
): value is StaticJsObjectPropertyDescriptorValue {
  return hasOwnProperty(value, "value");
}

export function isStaticJsObjectPropertyDescriptorGetter(
  value: any,
): value is StaticJsObjectPropertyDescriptorGetter {
  return hasOwnProperty(value, "get");
}

export function getStaticJsObjectPropertyDescriptorValue(
  descriptor: StaticJsObjectPropertyDescriptor,
): StaticJsValue | null {
  const hasValue = hasOwnProperty(descriptor, "value");
  const hasGet = hasOwnProperty(descriptor, "get");

  if (hasValue && hasGet) {
    throw new Error(
      "StaticJsObjectPropertyDescriptor cannot have both value and get.",
    );
  }

  if (hasValue) {
    return descriptor.value as StaticJsValue;
  } else if (hasGet) {
    return (descriptor as any).get();
  }

  return null;
}
