import { isStaticJsObjectLike } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function strictEquality(a: StaticJsValue, b: StaticJsValue) {
  if (a.runtimeTypeOf !== b.runtimeTypeOf) {
    return false;
  }

  if (isStaticJsObjectLike(a)) {
    return a === b;
  }

  // Value is a scalar value.
  return a.toJs() === b.toJs();
}
