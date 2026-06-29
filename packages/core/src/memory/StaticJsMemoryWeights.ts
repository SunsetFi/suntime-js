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

  // Based around StaticJsPlainObject.  Count might not reflect other
  // object types.
  [StaticJsMemoryAllocationTag.StaticJsObject]: 655,
  [StaticJsMemoryAllocationTag.StaticJsObjectPropertyOverhead]: 212,

  [StaticJsMemoryAllocationTag.StaticJsMap]: 880,
  [StaticJsMemoryAllocationTag.StaticJsMapEntryOverhead]: 37,

  [StaticJsMemoryAllocationTag.StaticJsSet]: 827,
  [StaticJsMemoryAllocationTag.StaticJsSetEntryOverhead]: 27,

  // Not based on AbstractObject, so lighter-weight.
  [StaticJsMemoryAllocationTag.StaticJsProxy]: 85,

  // A Promise object: ordinary object base + state/result fields + two
  // (empty) reaction arrays.
  [StaticJsMemoryAllocationTag.StaticJsPromise]: 768,
  // One retained reaction record ({ capability, handler, type }) + array slot.
  [StaticJsMemoryAllocationTag.StaticJsPromiseReactionOverhead]: 48,

  // An AST function wrapper: ordinary object base + the instance's
  // env/node/params/flags fields.
  [StaticJsMemoryAllocationTag.StaticJsAstFunction]: 745,

  // Worst-case retained size of a parsed function's babel AST, per source-text
  // char. Densest source is ~1 node/char (e.g. `;;;…`); each node carries a
  // node object plus its loc/range/Position overhead, ~325 bytes total. The
  // argument is the function's sourceText.length.
  // Note that this is not charged for evaluating scripts ad-hoc, but only
  // for retained ASTs in StaticJsAstFunction instances.
  [StaticJsMemoryAllocationTag.StaticJsAstFunctionNode]: (count: number) => 325 * count,
};
