import { isStaticJsObjectLike } from "../types/interfaces/StaticJsObject.js";
import { StaticJsValue } from "../types/interfaces/StaticJsValue.js";

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
