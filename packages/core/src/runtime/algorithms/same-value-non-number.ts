import { isStaticJsUndefined } from "../index.js";
import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
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

  if (isStaticJsNull(x) && isStaticJsNull(y)) {
    return true;
  }

  if (isStaticJsUndefined(x) && isStaticJsUndefined(y)) {
    return true;
  }

  return x === y;
}
