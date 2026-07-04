import type { StaticJsMemoryAllocationTag } from "./StaticJsMemoryAllocationTag.js";
import type { StaticJsAllocatorType } from "./StaticJsMemoryWeights.js";

export type StaticJsAllocator = <T extends StaticJsMemoryAllocationTag>(
  tag: T,
  value: StaticJsAllocatorType<T>,
) => void;

export type StaticJsMarkFunction = (
  this: StaticJsAllocation,
  marks: Set<StaticJsAllocation>,
) => void;

export type StaticJsAllocateSelfFunction = (
  this: StaticJsAllocation,
  allocate?: StaticJsAllocator,
) => void;

export interface StaticJsAllocation {
  /**
   * Marks the object and its references.  Used for garbage collection and cycle detection.
   * @param marks A set of already marked objects to avoid infinite recursion.
   */
  mark: StaticJsMarkFunction;

  /**
   * Requests the object to allocate itself against the realm's memory manager.
   */
  allocateSelf: StaticJsAllocateSelfFunction;
}
