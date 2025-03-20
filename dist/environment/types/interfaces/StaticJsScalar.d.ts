import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
export interface StaticJsNumber extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "number";
  value: number;
}
export declare function isStaticJsNumber(value: any): value is StaticJsNumber;
export interface StaticJsBoolean extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "boolean";
  value: boolean;
}
export declare function isStaticJsBoolean(value: any): value is StaticJsBoolean;
export interface StaticJsNull extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "null";
}
export declare function isStaticJsNull(value: any): value is StaticJsNull;
export interface StaticJsUndefined extends StaticJsPrimitive {
  [StaticJsTypeSymbol]: "undefined";
}
export declare function isStaticJsUndefined(
  value: any,
): value is StaticJsUndefined;
export type StaticJsScalar =
  | StaticJsNumber
  | StaticJsBoolean
  | StaticJsNull
  | StaticJsUndefined;
