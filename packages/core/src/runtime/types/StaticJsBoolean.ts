import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsBoolean extends StaticJsPrimitive {
  readonly runtimeTypeOf: "boolean";
  value: boolean;
  negate(): StaticJsBoolean;
}
export function isStaticJsBoolean(value: unknown): value is StaticJsBoolean {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "boolean";
}
