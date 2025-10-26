import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { sameValueNonNumber } from "./same-value-non-number.js";
import { sameValueNumber } from "./same-value-number.js";

export default function sameValue(x: StaticJsValue, y: StaticJsValue): boolean {
  if (x.runtimeTypeCode !== y.runtimeTypeCode) {
    return false;
  }

  if (isStaticJsNumber(x) && isStaticJsNumber(y)) {
    // This differentiates between +0 and -0.
    return sameValueNumber(x, y);
  }

  return sameValueNonNumber(x, y);
}
