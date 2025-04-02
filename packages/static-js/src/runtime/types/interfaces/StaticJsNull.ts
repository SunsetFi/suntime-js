import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsNull extends StaticJsPrimitive {
  readonly runtimeTypeOf: "null";
}

export function isStaticJsNull(value: unknown): value is StaticJsNull {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "null";
}
