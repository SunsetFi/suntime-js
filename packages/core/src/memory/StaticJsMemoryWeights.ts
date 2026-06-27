import { StaticJsMemoryAllocationTag } from "./StaticJsMemoryAllocationTag.js";

/**
 * A mapping of memory weights per allocation type for the StaticJsMemoryManager.
 * Typically, these are byte estimates, but they can be any unit of measurement
 * that is consistent across all allocation types and the manager's maximum
 * and high watermarks.
 */
export type StaticJsMemoryWeights = Record<StaticJsMemoryAllocationTag, number>;

/**
 * Estimated byte weights for each allocation type in the StaticJsMemoryManager, based on
 * evidence gathering in NodeJs v24.16.0
 */
export const defaultV8StaticJsMemoryWeights: StaticJsMemoryWeights = {
  [StaticJsMemoryAllocationTag.StaticJsNull]: 40,
  [StaticJsMemoryAllocationTag.StaticJsUndefined]: 40,
  [StaticJsMemoryAllocationTag.StaticJsBoolean]: 40,
  [StaticJsMemoryAllocationTag.StaticJsNumber]: 40,
  [StaticJsMemoryAllocationTag.StaticJsString]: 56,
  [StaticJsMemoryAllocationTag.RawStringCharacter]: 2,
  [StaticJsMemoryAllocationTag.StaticJsObject]: 655,
  [StaticJsMemoryAllocationTag.StaticJsObjectPropertyOverhead]: 212,

  [StaticJsMemoryAllocationTag.StaticJsMap]: 880,
  [StaticJsMemoryAllocationTag.StaticJsMapEntryOverhead]: 37,

  [StaticJsMemoryAllocationTag.StaticJsSet]: 827,
  [StaticJsMemoryAllocationTag.StaticJsSetEntryOverhead]: 27,

  [StaticJsMemoryAllocationTag.StaticJsProxy]: 85,
};
