import type { StaticJsAllocation } from "./StaticJsAllocation.js";

/**
 * The single construction-time chokepoint for memory allocation. Call after a
 * StaticJsAllocation instance is fully constructed (i.e. from a static `create`
 * factory), so `allocateSelf` runs exactly once, after the most-derived
 * constructor has finished. Enforced by the `suntime-memory/allocate-self`
 * lint rule.
 */
export function allocated<T extends StaticJsAllocation>(instance: T): T {
  instance.allocateSelf();
  return instance;
}
