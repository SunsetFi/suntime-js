import { StaticJsScalar } from "./StaticJsScalar.js";
import { StaticJsObject, StaticJsObjectLike } from "./StaticJsObject.js";
import { StaticJsArray } from "./StaticJsArray.js";
import { StaticJsFunction } from "./StaticJsFunction.js";

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

export function assertStaticJsValue(
  value: unknown,
  message?: string,
): asserts value is StaticJsValue {
  if (!isStaticJsValue(value)) {
    throw new Error(message ?? `Invalid StaticJsValue`);
  }
}
