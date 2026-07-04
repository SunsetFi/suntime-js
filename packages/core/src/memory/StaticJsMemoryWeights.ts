import type { StaticJsBoolean } from "#types/StaticJsBoolean.js";
import type { StaticJsFunction } from "#types/StaticJsFunction.js";
import type { StaticJsMap } from "#types/StaticJsMap.js";
import type { StaticJsNull } from "#types/StaticJsNull.js";
import type { StaticJsNumber } from "#types/StaticJsNumber.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPromise } from "#types/StaticJsPromise.js";
import type { StaticJsPropertyKey } from "#types/StaticJsPropertyKey.js";
import type { StaticJsProxy } from "#types/StaticJsProxy.js";
import type { StaticJsSet } from "#types/StaticJsSet.js";
import type { StaticJsString } from "#types/StaticJsString.js";
import type { StaticJsUndefined } from "#types/StaticJsUndefined.js";

import { StaticJsMemoryAllocationTag } from "./StaticJsMemoryAllocationTag.js";

export type StaticJsMemoryAllocatorFunc<in TValue> = (value: TValue) => number;
export type StaticJsMemoryAllocator<TValue> = number | StaticJsMemoryAllocatorFunc<TValue>;

/**
 * A mapping of memory weights per allocation type for the StaticJsMemoryManager.
 * Typically, these are byte estimates, but they can be any unit of measurement
 * that is consistent across all allocation types and the manager's maximum
 * and high watermarks.
 */
export interface StaticJsMemoryWeights {
  [StaticJsMemoryAllocationTag.RawString]: StaticJsMemoryAllocator<string>;
  [StaticJsMemoryAllocationTag.RawNumber]: StaticJsMemoryAllocator<number>;

  [StaticJsMemoryAllocationTag.StaticJsNull]: StaticJsMemoryAllocator<StaticJsNull>;
  [StaticJsMemoryAllocationTag.StaticJsUndefined]: StaticJsMemoryAllocator<StaticJsUndefined>;
  [StaticJsMemoryAllocationTag.StaticJsBoolean]: StaticJsMemoryAllocator<StaticJsBoolean>;
  [StaticJsMemoryAllocationTag.StaticJsNumber]: StaticJsMemoryAllocator<StaticJsNumber>;
  [StaticJsMemoryAllocationTag.StaticJsString]: StaticJsMemoryAllocator<StaticJsString>;

  [StaticJsMemoryAllocationTag.StaticJsObject]: StaticJsMemoryAllocator<StaticJsObject>;
  [StaticJsMemoryAllocationTag.StaticJsObjectPropertyOverhead]: StaticJsMemoryAllocator<StaticJsPropertyKey>;

  [StaticJsMemoryAllocationTag.StaticJsMap]: StaticJsMemoryAllocator<StaticJsMap>;
  [StaticJsMemoryAllocationTag.StaticJsMapEntryOverhead]: StaticJsMemoryAllocator<void>;

  [StaticJsMemoryAllocationTag.StaticJsSet]: StaticJsMemoryAllocator<StaticJsSet>;
  [StaticJsMemoryAllocationTag.StaticJsSetEntryOverhead]: StaticJsMemoryAllocator<void>;

  [StaticJsMemoryAllocationTag.StaticJsProxy]: StaticJsMemoryAllocator<StaticJsProxy>;

  [StaticJsMemoryAllocationTag.StaticJsPromise]: StaticJsMemoryAllocator<StaticJsPromise>;
  [StaticJsMemoryAllocationTag.StaticJsPromiseReactionOverhead]: StaticJsMemoryAllocator<unknown>;

  [StaticJsMemoryAllocationTag.StaticJsAstFunction]: StaticJsMemoryAllocator<StaticJsFunction>;
  [StaticJsMemoryAllocationTag.StaticJsAstFunctionAstRootBySourceText]: StaticJsMemoryAllocator<string>;
}

export type StaticJsMemoryAllocationObjectTag =
  | StaticJsMemoryAllocationTag.StaticJsObject
  | StaticJsMemoryAllocationTag.StaticJsMap
  | StaticJsMemoryAllocationTag.StaticJsSet
  | StaticJsMemoryAllocationTag.StaticJsProxy
  | StaticJsMemoryAllocationTag.StaticJsPromise
  | StaticJsMemoryAllocationTag.StaticJsAstFunction;

export type StaticJsAllocatorType<TTag extends keyof StaticJsMemoryWeights> =
  StaticJsMemoryWeights[TTag] extends StaticJsMemoryAllocator<infer TValue> ? TValue : never;
