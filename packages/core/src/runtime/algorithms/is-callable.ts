import { isStaticJsCallable, StaticJsCallable } from "../types/StaticJsCallable.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function isCallable(value: StaticJsValue | undefined | null): value is StaticJsCallable {
  return isStaticJsCallable(value);
}
