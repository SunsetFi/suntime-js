import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsString extends StaticJsPrimitive {
  readonly runtimeTypeOf: "string";
  value: string;
}
export function isStaticJsString(value: unknown): value is StaticJsString {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "string";
}
