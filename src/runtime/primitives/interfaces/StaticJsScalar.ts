import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsString extends StaticJsPrimitive {
  value: string;
}
export function isStaticJsString(value: unknown): value is StaticJsString {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "string";
}

export interface StaticJsNumber extends StaticJsPrimitive {
  value: number;
}
export function isStaticJsNumber(value: unknown): value is StaticJsNumber {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "number";
}

export interface StaticJsBoolean extends StaticJsPrimitive {
  value: boolean;
  negate(): StaticJsBoolean;
}
export function isStaticJsBoolean(value: unknown): value is StaticJsBoolean {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "boolean";
}

export type StaticJsNull = StaticJsPrimitive;
export function isStaticJsNull(value: unknown): value is StaticJsNull {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "null";
}

export type StaticJsUndefined = StaticJsPrimitive;
export function isStaticJsUndefined(
  value: unknown,
): value is StaticJsUndefined {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "undefined";
}

export type StaticJsScalar =
  | StaticJsString
  | StaticJsNumber
  | StaticJsBoolean
  | StaticJsNull
  | StaticJsUndefined;

export function isStaticJsScalar(value: StaticJsValue): boolean {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return [
    "string",
    "number",
    "string",
    "boolean",
    "null",
    "undefined",
  ].includes(value.runtimeTypeOf);
}
