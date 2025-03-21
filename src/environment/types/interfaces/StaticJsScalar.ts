import StaticJsTypeSymbol, {
  staticJsInstanceOf,
} from "../StaticJsTypeSymbol.js";
import { StaticJsPrimitive } from "./StaticJsPrimitive.js";

export interface StaticJsNumber extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "number";
  value: number;
}
export function isStaticJsNumber(value: any): value is StaticJsNumber {
  return staticJsInstanceOf(value) === "number";
}

export interface StaticJsBoolean extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "boolean";
  value: boolean;
  negate(): StaticJsBoolean;
}
export function isStaticJsBoolean(value: any): value is StaticJsBoolean {
  return staticJsInstanceOf(value) === "boolean";
}

export interface StaticJsNull extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "null";
}
export function isStaticJsNull(value: any): value is StaticJsNull {
  return staticJsInstanceOf(value) === "null";
}

export interface StaticJsUndefined extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "undefined";
}
export function isStaticJsUndefined(value: any): value is StaticJsUndefined {
  return staticJsInstanceOf(value) === "undefined";
}

export type StaticJsScalar =
  | StaticJsNumber
  | StaticJsBoolean
  | StaticJsNull
  | StaticJsUndefined;
