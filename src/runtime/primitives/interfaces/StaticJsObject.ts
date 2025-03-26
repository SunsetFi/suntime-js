import hasOwnProperty from "../../../internal/has-own-property.js";
import StaticJsTypeSymbol, {
  staticJsInstanceOf,
} from "../StaticJsTypeSymbol.js";
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

export function isStaticJsObject(value: unknown): value is StaticJsObject {
  const type = staticJsInstanceOf(value);
  return type === "object";
}

export function isStaticJsObjectLike(value: unknown): value is StaticJsObject {
  const type = staticJsInstanceOf(value);
  if (!type) {
    return false;
  }
  return ["object", "array", "function"].includes(type);
}

export interface StaticJsObjectPropertyDescriptorBase {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  readonly writable?: boolean;
  set?(value: StaticJsValue): void;
}

export type StaticJsObjectPropertyDescriptorWriteOnly =
  Required<StaticJsObjectPropertyDescriptorBase>;
export interface StaticJsObjectPropertyDescriptorValue
  extends StaticJsObjectPropertyDescriptorBase {
  readonly value: StaticJsValue;
}

export interface StaticJsObjectPropertyDescriptorGetter
  extends StaticJsObjectPropertyDescriptorBase {
  readonly get: () => StaticJsValue;
}

export type StaticJsObjectPropertyDescriptor =
  | StaticJsObjectPropertyDescriptorWriteOnly
  | StaticJsObjectPropertyDescriptorValue
  | StaticJsObjectPropertyDescriptorGetter;

export function validateStaticJsObjectPropertyDescriptor(
  value: unknown,
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
  value: unknown,
): value is Required<StaticJsObjectPropertyDescriptorValue> {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "value");
}

export function isStaticJsObjectPropertyDescriptorGetter(
  value: unknown,
): value is Required<StaticJsObjectPropertyDescriptorGetter> {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "get");
}

export function getStaticJsObjectPropertyDescriptorValue(
  descriptor: StaticJsObjectPropertyDescriptor,
): StaticJsValue | null {
  const hasValue = isStaticJsObjectPropertyDescriptorValue(descriptor);
  const hasGet = isStaticJsObjectPropertyDescriptorGetter(descriptor);

  if (hasValue && hasGet) {
    throw new Error(
      "StaticJsObjectPropertyDescriptor cannot have both value and get.",
    );
  }

  if (hasValue) {
    return descriptor.value as StaticJsValue;
  } else if (hasGet) {
    return descriptor.get();
  }

  return null;
}
