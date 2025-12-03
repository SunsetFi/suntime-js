import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export interface IteratorRecord {
  iterator: StaticJsObjectLike;
  // Apparently the spec doesn't check this when we get it.
  nextMethod: StaticJsValue;
  done: boolean;
}
