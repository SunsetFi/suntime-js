import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsIteratorRecord {
  iterator: StaticJsObject;
  // Apparently the spec doesn't check this when we get it.
  nextMethod: StaticJsValue;
  done: boolean;
}
