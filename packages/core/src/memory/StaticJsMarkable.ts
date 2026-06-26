import type { StaticJsValue } from "#types/StaticJsValue.js";

export interface StaticJsMarkable {
  /**
   * Marks the object and its references.  Used for garbage collection and cycle detection.
   * @param marks A set of already marked objects to avoid infinite recursion.
   * @param allocate If true, cause the object to re-allocate itself with the memory manager.
   */
  mark(marks: Set<StaticJsValue>, allocate?: boolean): void;
}
