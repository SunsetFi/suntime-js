import type { StaticJsValue } from "../types/StaticJsValue.js";

import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
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

// Hack: our getPrototypeOf and setPrototypeOf use null instead of StaticJsNull and I'm too in the flow of Proxies to fix that now
sameValue.nullHack = function (x: StaticJsValue | null, y: StaticJsValue | null): boolean {
  if (isStaticJsNull(x)) {
    x = null;
  }
  if (isStaticJsNull(y)) {
    y = null;
  }

  if (x === null || y === null) {
    return x === y;
  }

  return sameValue(x, y);
};
