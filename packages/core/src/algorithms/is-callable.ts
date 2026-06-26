import { isStaticJsCallable, type StaticJsCallable } from "../runtime/types/StaticJsCallable.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function isCallable(value: StaticJsValue | undefined | null): value is StaticJsCallable {
  return isStaticJsCallable(value);
}
