import type { StaticJsValue } from "../types/StaticJsValue.js";

import { isStaticJsObject } from "../types/StaticJsObject.js";

export function toNativeUnwrap(value: StaticJsValue): unknown {
  if (isStaticJsObject(value)) {
    return value;
  }

  return value.value;
}
