import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export type StaticJsNull = StaticJsPrimitive;
export function isStaticJsNull(value: unknown): value is StaticJsNull {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "null";
}
