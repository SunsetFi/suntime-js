import { StaticJsMemoryAllocationTag } from "./StaticJsMemoryAllocationTag.js";

export type StaticJsMemoryWeight = number | ((count: number) => number);

/**
 * A mapping of memory weights per allocation type for the StaticJsMemoryManager.
 * Typically, these are byte estimates, but they can be any unit of measurement
 * that is consistent across all allocation types and the manager's maximum
 * and high watermarks.
 */
export type StaticJsMemoryWeights = Record<StaticJsMemoryAllocationTag, StaticJsMemoryWeight>;

/**
 * Estimated byte weights for each allocation type in the StaticJsMemoryManager, based on
 * evidence gathering in NodeJs v24.16.0
 */
export const defaultV8StaticJsMemoryWeights: StaticJsMemoryWeights = {
  // 16 byte header for strings, plus 1 byte per char.
  [StaticJsMemoryAllocationTag.RawStringCharacter]: (count: number) => 16 + count,

  // Numbers that fit in a 32-bit signed integer are stored inline as a SMI at no
  // cost. Any other number (fractional, out of SMI range, -0, NaN, +/-Infinity)
  // is boxed as a 16-byte HeapNumber. The argument is the number value itself.
  [StaticJsMemoryAllocationTag.RawNumber]: (value: number) =>
    value === (value | 0) && !Object.is(value, -0) ? 0 : 16,

  [StaticJsMemoryAllocationTag.StaticJsNull]: 40,
  [StaticJsMemoryAllocationTag.StaticJsUndefined]: 40,
  [StaticJsMemoryAllocationTag.StaticJsBoolean]: 40,
  [StaticJsMemoryAllocationTag.StaticJsNumber]: 40,
  [StaticJsMemoryAllocationTag.StaticJsString]: 56,

  [StaticJsMemoryAllocationTag.StaticJsObject]: 655,
  [StaticJsMemoryAllocationTag.StaticJsObjectPropertyOverhead]: 212,

  [StaticJsMemoryAllocationTag.StaticJsMap]: 880,
  [StaticJsMemoryAllocationTag.StaticJsMapEntryOverhead]: 37,

  [StaticJsMemoryAllocationTag.StaticJsSet]: 827,
  [StaticJsMemoryAllocationTag.StaticJsSetEntryOverhead]: 27,

  [StaticJsMemoryAllocationTag.StaticJsProxy]: 85,
};
