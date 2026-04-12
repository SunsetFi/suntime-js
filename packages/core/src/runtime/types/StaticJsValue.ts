import type { StaticJsScalar } from "./StaticJsScalar.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import type { StaticJsPlainObject } from "./StaticJsPlainObject.js";
import type { StaticJsArray } from "./StaticJsArray.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";

export type StaticJsValue =
  | StaticJsScalar
  | StaticJsPlainObject
  | StaticJsObject
  | StaticJsArray
  | StaticJsFunction;

export function isStaticJsValue(value: unknown): value is StaticJsValue {
  return (
    value != null &&
    typeof value === "object" &&
    "runtimeTypeCode" in value &&
    typeof value.runtimeTypeCode === "number"
  );
}
