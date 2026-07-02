import type { StaticJsValue } from "#types/StaticJsValue.js";

import type { StaticJsMemoryAllocationTag } from "./StaticJsMemoryAllocationTag.js";
import type { StaticJsAllocatorType } from "./StaticJsMemoryWeights.js";

/**
 * Provides a best-effort, non-authoritative tracking and management of memory usage and limits for a {@link StaticJsRealm}.
 * Note that this does not provide 'true' memory management.  All objects are still on the host's JavaScript engine, and their actual memory use
 * and garbage collection is still managed by the host engine.  This is a best-effort tracking of memory usage and limits, and may not be accurate in all cases.
 *
 * In general, this system should be relied on only as a failstop against runaway memory usage by sandboxed scripts.
 */
export interface StaticJsMemoryManager {
  /**
   * Record an allocation of a given size in bytes.  This is used to track memory usage and enforce limits.
   * This is typically called for gen zero allocations, which are never removed until the next garbage collection sweep.
   * @param tag The type of allocation being made.  This is used to determine the size of the allocation in bytes.
   * @param value The value being allocated.  This is used to determine the size of the allocation in bytes.
   */
  allocate<T extends StaticJsMemoryAllocationTag>(tag: T, value: StaticJsAllocatorType<T>): void;

  /**
   * Perform a garbage collection sweep, resetting the gen zero size and recounting the gen one size.
   */
  sweep(): void;

  /**
   * Perform a garbage collection sweep if the allocated size exceeds the high watermark.
   */
  sweepIfWatermark(): void;

  /**
   * Pin a value to prevent it from ever being considered unused.
   * Pinned values will always contribute to gen one size, and will never be swept.
   * @param value The value to pin.
   */
  pin(value: StaticJsValue): void;

  /**
   * Unpin a value, allowing it to be considered unused and eligible for sweeping.
   * @param value The value to unpin.
   */
  unpin(value: StaticJsValue): void;

  /**
   * The current size in bytes of the gen zero allocations.
   * These are allocations that have not been swept yet, and are considered "young" allocations.
   * This is a best-effort estimate, and may frequently overcount actual memory usage.
   */
  get genZeroSize(): number;

  /**
   * The current size in bytes of the gen one allocations.
   * These are allocations that have survived at least one sweep, and are considered "old" allocations.
   * This is a best-effort estimate, and should be reasonably accurate in cases where a sweep has just been completed.
   */
  get genOneSize(): number;

  /**
   * The current total size in bytes of all allocations (gen zero + gen one).
   */
  get allocatedSize(): number;

  /**
   * The high watermark of memory (in bytes) that the realm will allow generation zero to reach before performing a garbage collection sweep.
   */
  get highWatermark(): number;

  /**
   * The high watermark of memory (in bytes) that the realm will allow generation zero to reach before performing a garbage collection sweep.
   * Set to Infinity to disable automatic sweeping.
   * Set to NaN to use the default high watermark of 80% of the max memory size.
   */
  set highWatermark(size: number);

  /**
   * The maximum size of memory (in bytes) that the realm will allow before throwing an out-of-memory error.
   */
  get maxSize(): number;

  /**
   * The maximum size of memory (in bytes) that the realm will allow before throwing an out-of-memory error.
   * Set to Infinity to disable the limit.
   */
  set maxSize(size: number);
}
