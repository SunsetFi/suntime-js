import { isStaticJsCallable, type StaticJsCallable } from "../types/StaticJsCallable.js";
import { type StaticJsValue } from "../types/StaticJsValue.js";

export function isCallable(value: StaticJsValue | undefined | null): value is StaticJsCallable {
  return isStaticJsCallable(value);
}
