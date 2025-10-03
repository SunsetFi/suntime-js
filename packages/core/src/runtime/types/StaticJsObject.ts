import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsObject extends StaticJsObjectLike {
  readonly runtimeTypeOf: "object";
}
export function isStaticJsObject(value: unknown): value is StaticJsObject {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "object";
}
