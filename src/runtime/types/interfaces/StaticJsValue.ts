import { StaticJsScalar } from "./StaticJsScalar.js";
import { StaticJsObject } from "./StaticJsObject.js";

export type StaticJsValue = StaticJsScalar | StaticJsObject;

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
