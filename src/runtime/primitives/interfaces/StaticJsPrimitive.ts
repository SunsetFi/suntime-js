import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export interface StaticJsPrimitive {
  readonly typeOf:
    | "object"
    | "string"
    | "number"
    | "boolean"
    | "function"
    | "undefined";
  readonly [StaticJsTypeSymbol]: string;
  toJs(): unknown;
  toString(): string;
  toNumber(): number;
  toBoolean(): boolean;
}
