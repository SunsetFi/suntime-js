import type { StaticJsScalar } from "./StaticJsScalar.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import type { StaticJsArray } from "./StaticJsArray.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";

export type StaticJsValue =
  | StaticJsScalar
  | StaticJsObject
  | StaticJsObjectLike
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
