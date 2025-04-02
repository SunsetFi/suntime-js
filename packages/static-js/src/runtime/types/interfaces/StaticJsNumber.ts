import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsNumber extends StaticJsPrimitive {
  readonly runtimeTypeOf: "number";
  value: number;
}
export function isStaticJsNumber(value: unknown): value is StaticJsNumber {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "number";
}
