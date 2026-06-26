import type { StaticJsBoolean } from "./StaticJsBoolean.js";
import type { StaticJsNull } from "./StaticJsNull.js";
import type { StaticJsNumber } from "./StaticJsNumber.js";
import type { StaticJsString } from "./StaticJsString.js";
import type { StaticJsSymbol } from "./StaticJsSymbol.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import type { StaticJsUndefined } from "./StaticJsUndefined.js";
import { isStaticJsValue } from "./StaticJsValue.js";

/**
 * A non-object value in the StaticJs runtime, which can be null, string, number, boolean, symbol, or undefined.
 *
 * All scalars have a `value` property that holds the actual JavaScript value which can be accessed directly.
 */
export type StaticJsScalar =
  | StaticJsNull
  | StaticJsString
  | StaticJsNumber
  | StaticJsBoolean
  | StaticJsSymbol
  | StaticJsUndefined;

/**
 * Type guard to check if a value is a StaticJsScalar.
 * @param value The value to check.
 * @returns True if the value is a StaticJsScalar, false otherwise.
 */
export function isStaticJsScalar(value: unknown): value is StaticJsScalar {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return Boolean(value.runtimeTypeCode & StaticJsTypeCode.IsScalarFlag);
}
