import { StaticJsScalar } from "./StaticJsScalar.js";
import { StaticJsObject } from "./StaticJsObject.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export type StaticJsValue = StaticJsScalar | StaticJsObject<string>;

export function isStaticJsValue(value: unknown): value is StaticJsValue {
  return staticJsInstanceOf(value) != null;
}

export function assertStaticJsValue(
  value: unknown,
  message?: string,
): asserts value is StaticJsValue {
  if (!isStaticJsValue(value)) {
    throw new Error(message ?? `Invalid StaticJsValue`);
  }
}
