import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";

import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../../StaticJsArray.js";
import { isStaticJsSymbol } from "../../StaticJsSymbol.js";

export function isArrayIndex(value: StaticJsPropertyKey): value is string {
  if (isStaticJsSymbol(value)) {
    return false;
  }

  const parsed = parseInt(value, 10);
  return (
    !Number.isNaN(parsed) &&
    parsed >= 0 &&
    parsed <= MAX_ARRAY_LENGTH_INCLUSIVE &&
    Math.floor(parsed) === parsed
  );
}
