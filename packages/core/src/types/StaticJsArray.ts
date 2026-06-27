import type { StaticJsObject } from "./StaticJsObject.js";

import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export const MAX_ARRAY_LENGTH_INCLUSIVE = 2 ** 53 - 1;

export interface StaticJsArray extends StaticJsObject {
  readonly runtimeTypeOf: "array";

  /**
   * Safely sets the index of the array to the given value, without invoking any sandboxed code.
   * @param index The index to set.  Must be a non-negative integer less than or equal to MAX_ARRAY_LENGTH_INCLUSIVE.
   * @param value The value to set at the given index.  Must be a StaticJsValue.
   */
  setIndexSafe(index: number, value: StaticJsValue): void;
}

export function isStaticJsArray(value: unknown): value is StaticJsArray {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Array;
}
