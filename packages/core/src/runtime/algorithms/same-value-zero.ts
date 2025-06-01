import { isStaticJsNumber } from "../types/interfaces/StaticJsNumber.js";
import { isStaticJsScalar } from "../types/interfaces/StaticJsScalar.js";
import { StaticJsValue } from "../types/interfaces/StaticJsValue.js";

export default function sameValueZero(
  a: StaticJsValue,
  b: StaticJsValue,
): boolean {
  if (isStaticJsNumber(a) && isStaticJsNumber(b)) {
    return a.value === b.value || (a.value !== a.value && b.value !== b.value);
  }

  if (isStaticJsScalar(a) && isStaticJsScalar(b)) {
    return a.value === b.value;
  }

  // Object.  Return if the same reference.
  return a === b;
}
