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
  // This is kinda nasty.
  const type = (value as unknown as StaticJsValue)?.runtimeTypeOf;
  return typeof type === "string";
}
