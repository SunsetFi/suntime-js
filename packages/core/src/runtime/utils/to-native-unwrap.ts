import { isStaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function toNativeUnwrap(value: StaticJsValue): unknown {
  if (isStaticJsObject(value)) {
    return value;
  }

  return value.value;
}
