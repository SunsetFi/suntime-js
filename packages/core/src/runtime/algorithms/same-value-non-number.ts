import { isStaticJsBoolean } from "../types/index.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function sameValueNonNumber(
  x: StaticJsValue,
  y: StaticJsValue,
): boolean {
  if (x.runtimeTypeOf !== y.runtimeTypeOf) {
    return false;
  }

  if (isStaticJsString(x) && isStaticJsString(y)) {
    return x.value === y.value;
  }

  if (isStaticJsBoolean(x) && isStaticJsBoolean(y)) {
    return x.value === y.value;
  }

  return x === y;
}
