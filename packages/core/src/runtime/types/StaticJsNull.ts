import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsNull extends StaticJsPrimitive {
  readonly runtimeTypeOf: "null";

  readonly value: null;
}

export function isStaticJsNull(value: unknown): value is StaticJsNull {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Null;
}
