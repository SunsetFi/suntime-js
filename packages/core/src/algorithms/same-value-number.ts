import type { StaticJsNumber } from "../types/StaticJsNumber.js";

export function sameValueNumber(x: StaticJsNumber, y: StaticJsNumber): boolean {
  if (x.runtimeTypeCode !== y.runtimeTypeCode) {
    return false;
  }

  // This differentiates between +0 and -0,
  // as the spec expects.
  return Object.is(x.value, y.value);
}
