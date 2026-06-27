/**
 * Types of allocations that may be made of the StaticJsMemoryManager.
 */
export enum StaticJsMemoryAllocationTag {
  StaticJsNull,
  StaticJsUndefined,
  StaticJsBoolean,
  StaticJsNumber,
  StaticJsString,
  RawStringCharacter,
  StaticJsObject,
  StaticJsObjectPropertyOverhead,

  StaticJsMap,
  StaticJsMapEntryOverhead,

  StaticJsSet,
  StaticJsSetEntryOverhead,

  StaticJsProxy,
}
