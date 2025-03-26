import StaticJsTypeSymbol, {
  staticJsInstanceOf,
} from "../StaticJsTypeSymbol.js";
import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsNumber extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "number";
  value: number;
}
export function isStaticJsNumber(value: unknown): value is StaticJsNumber {
  return staticJsInstanceOf(value) === "number";
}

export interface StaticJsBoolean extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "boolean";
  value: boolean;
  negate(): StaticJsBoolean;
}
export function isStaticJsBoolean(value: unknown): value is StaticJsBoolean {
  return staticJsInstanceOf(value) === "boolean";
}

export interface StaticJsNull extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "null";
}
export function isStaticJsNull(value: unknown): value is StaticJsNull {
  return staticJsInstanceOf(value) === "null";
}

export interface StaticJsUndefined extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "undefined";
}
export function isStaticJsUndefined(
  value: unknown,
): value is StaticJsUndefined {
  return staticJsInstanceOf(value) === "undefined";
}

export type StaticJsScalar =
  | StaticJsNumber
  | StaticJsBoolean
  | StaticJsNull
  | StaticJsUndefined;

export function isStaticJsScalar(value: StaticJsValue): boolean {
  return ["number", "string", "boolean", "null", "undefined"].includes(
    staticJsInstanceOf(value)!,
  );
}
