import {
  isStaticJsNumber,
  isStaticJsScalar,
  StaticJsValue,
} from "../types/index.js";

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
