/**
 * Types of allocations that may be made of the StaticJsMemoryManager.
 */
export enum StaticJsMemoryAllocationTag {
  /**
   * Raw engine-native strings
   */
  RawStringCharacter,

  /**
   * Raw engine-native numbers
   * Can be free, or can incur a heap cost depending on context and value.
   */
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

  /**
   * The ambient cost of a {@link StaticJsPromiseImpl} wrapper: the ordinary
   * object base plus its state/result fields and the two reaction arrays.
   * Replaces the {@link StaticJsObject} base. The settled result value and any
   * reaction records are charged separately.
   */
  StaticJsPromise,

  /**
   * The ambient cost of a single retained promise ReactionRecord
   * (`{ capability, handler, type }`) plus its array slot. A `.then()` on a
   * pending promise retains a fulfill + reject pair. The capability's
   * promise/resolve/reject and the handler are each markable on their own.
   */
  StaticJsPromiseReactionOverhead,

  /**
   * The ambient cost of a {@link StaticJsAstFunction} wrapper: the ordinary
   * object base plus the instance's env/node/params/flags fields. Replaces the
   * {@link StaticJsObject} base. The function's own properties (name/length/
   * prototype), source text, and AST are charged separately.
   */
  StaticJsAstFunction,

  /**
   * The parsed babel AST a {@link StaticJsAstFunction} retains for its lifetime,
   * charged proportionally to the function's source-text length. The source text
   * itself is accounted separately via {@link RawStringCharacter}; this is the
   * node tree on top of it.
   * At its worst case, empty statements (`;;;;`) produce ~325 bytes/char.
   */
  StaticJsAstFunctionNode,
}
