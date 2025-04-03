import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsUndefined extends StaticJsPrimitive {
  readonly runtimeTypeOf: "undefined";
}

export function isStaticJsUndefined(
  value: unknown,
): value is StaticJsUndefined {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "undefined";
}
