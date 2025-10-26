import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { sameValueNonNumber } from "./same-value-non-number.js";

export default function isStrictlyEqual(
  x: StaticJsValue,
  y: StaticJsValue,
): boolean {
  if (x.runtimeTypeCode !== y.runtimeTypeCode) {
    return false;
  }

  if (isStaticJsNumber(x) && isStaticJsNumber(y)) {
    return x.value === y.value;
  }

  return sameValueNonNumber(x, y);
}
