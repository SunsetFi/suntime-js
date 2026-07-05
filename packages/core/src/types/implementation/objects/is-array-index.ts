import { canonicalNumericIndexString } from "#algorithms/canonical-numeric-index-string.js";

import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";

import { isStaticJsSymbol } from "../../StaticJsSymbol.js";

const MAX_INDEX_INCLUSIVE = 2 ** 32 - 2;

export function isArrayIndex(value: StaticJsPropertyKey): value is string {
  if (isStaticJsSymbol(value)) {
    return false;
  }

  // SPec says to use CanonicalNumericIndexString
  const canonical = canonicalNumericIndexString.js(value);
  if (canonical === undefined) {
    return false;
  }

  if (Math.trunc(canonical) !== canonical) {
    return false;
  }

  if (canonical < 0 || canonical > MAX_INDEX_INCLUSIVE) {
    return false;
  }

  return true;
}
