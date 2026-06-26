import { isStaticJsNumber } from "../runtime/types/StaticJsNumber.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { sameValueNonNumber } from "./same-value-non-number.js";

export function isStrictlyEqual(x: StaticJsValue, y: StaticJsValue): boolean {
  if (x.runtimeTypeCode !== y.runtimeTypeCode) {
    return false;
  }

  if (isStaticJsNumber(x) && isStaticJsNumber(y)) {
    return x.value === y.value;
  }

  return sameValueNonNumber(x, y);
}
