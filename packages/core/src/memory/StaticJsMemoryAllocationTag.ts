/**
 * Types of allocations that may be made of the StaticJsMemoryManager.
 */
export enum StaticJsMemoryAllocationTag {
  RawStringCharacter,
  RawNumber,

  StaticJsNull,
  StaticJsUndefined,
  StaticJsBoolean,
  StaticJsNumber,
  StaticJsString,

  StaticJsObject,
  StaticJsObjectPropertyOverhead,

  StaticJsMap,
  StaticJsMapEntryOverhead,

  StaticJsSet,
  StaticJsSetEntryOverhead,

  StaticJsProxy,
}
