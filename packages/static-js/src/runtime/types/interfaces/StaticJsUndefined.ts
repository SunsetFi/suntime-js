import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export type StaticJsUndefined = StaticJsPrimitive;
export function isStaticJsUndefined(
  value: unknown,
): value is StaticJsUndefined {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "undefined";
}
