import { StaticJsScalar } from "./StaticJsScalar.js";
import { StaticJsObject } from "./StaticJsObject.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export type StaticJsValue = StaticJsScalar | StaticJsObject<string>;

export function isStaticJsValue(value: any): value is StaticJsValue {
  if (
    value &&
    typeof value === "object" &&
    typeof value[StaticJsTypeSymbol] === "string"
  ) {
    return true;
  }

  return false;
}

export function assertStaticJsValue(
  value: any,
  message?: string,
): asserts value is StaticJsValue {
  if (!isStaticJsValue(value)) {
    throw new Error(message ?? `Invalid StaticJsValue`);
  }
}
