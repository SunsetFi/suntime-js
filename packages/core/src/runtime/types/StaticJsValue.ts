import type { StaticJsArray } from "./StaticJsArray.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import type { StaticJsPlainObject } from "./StaticJsPlainObject.js";
import type { StaticJsScalar } from "./StaticJsScalar.js";

/**
 * A value in the StaticJs runtime, which can be a scalar, plain object, object, array, or function.
 *
 * Each value is unique to the realm that created it, and cannot be crossed to other realms.
 */
export type StaticJsValue =
  | StaticJsScalar
  | StaticJsPlainObject
  | StaticJsObject
  | StaticJsArray
  | StaticJsFunction;

/**
 * Type guard to check if a value is a StaticJsValue.
 * @param value The value to check.
 * @returns True if the value is a StaticJsValue, false otherwise.
 */
export function isStaticJsValue(value: unknown): value is StaticJsValue {
  return (
    value != null &&
    typeof value === "object" &&
    "runtimeTypeCode" in value &&
    typeof value.runtimeTypeCode === "number"
  );
}
