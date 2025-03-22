import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsObject<T extends string = "object">
  extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: T;

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

  getKeys(): string[];
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

export interface StaticJsObjectPropertyDescriptor {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  readonly writable?: boolean;
  get?(): StaticJsValue;
  set?(value: StaticJsValue): void;
  readonly value?: StaticJsValue;
}
