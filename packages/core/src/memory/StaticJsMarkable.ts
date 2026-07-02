import type { StaticJsMemoryAllocationTag } from "./StaticJsMemoryAllocationTag.js";
import type { StaticJsAllocatorType } from "./StaticJsMemoryWeights.js";

export type StaticJsMarkableAllocator = <T extends StaticJsMemoryAllocationTag>(
  tag: T,
  value: StaticJsAllocatorType<T>,
) => void;

export type StaticJsMarkFunction = (
  this: StaticJsMarkable,
  marks: Set<StaticJsMarkable>,
  allocate?: StaticJsMarkableAllocator,
) => void;
export interface StaticJsMarkable {
  /**
   * Marks the object and its references.  Used for garbage collection and cycle detection.
   * @param marks A set of already marked objects to avoid infinite recursion.
   * @param allocate If present, a function to call to report the allocated memory for this object and its children.  This is used to track memory usage and enforce limits.
   */
  mark: StaticJsMarkFunction;
}
