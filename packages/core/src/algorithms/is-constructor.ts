import { isStaticJsFunction, type StaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function isConstructor(value: StaticJsValue | null): value is StaticJsFunction {
  if (!isStaticJsFunction(value)) {
    return false;
  }

  return value.isConstructor;
}
