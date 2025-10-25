import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function toNativeUnwrap(value: StaticJsValue): unknown {
  if (isStaticJsObjectLike(value)) {
    return value;
  }

  return value.value;
}
