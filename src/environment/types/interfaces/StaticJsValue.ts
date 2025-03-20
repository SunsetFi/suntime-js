import { StaticJsScalar } from "./StaticJsScalar.js";
import { StaticJsObject } from "./StaticJsObject.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export type StaticJsValue = StaticJsScalar | StaticJsObject<string>;

export function isStaticJsValue(value: any): asserts value is StaticJsValue {
  if (
    typeof value !== "object" ||
    value === null ||
    typeof value[StaticJsTypeSymbol] !== "string"
  ) {
    throw new Error("Not a StaticJsValue");
  }
}
