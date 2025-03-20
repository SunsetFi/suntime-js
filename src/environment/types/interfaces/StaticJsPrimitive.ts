import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export interface StaticJsPrimitive {
  readonly [StaticJsTypeSymbol]: string;
  readonly [StaticJsTypeofSymbol]:
    | "object"
    | "string"
    | "number"
    | "boolean"
    | "function"
    | "undefined";
  toString(): string;
  toJs(): any;
}
