import type { StaticJsValue } from "../types/StaticJsValue.js";

export default interface StaticJsMemoryMonitor {
  readonly totalObjects: number;

  _alloc(value: StaticJsValue): void;
  _release(value: StaticJsValue): void;
}
