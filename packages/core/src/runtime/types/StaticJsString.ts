import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsString extends StaticJsPrimitive {
  readonly runtimeTypeOf: "string";
  value: string;
}
export function isStaticJsString(value: unknown): value is StaticJsString {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.String;
}
