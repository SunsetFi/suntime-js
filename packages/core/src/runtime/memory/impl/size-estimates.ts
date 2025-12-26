// Experimentally determined on NodeJS 24.12.0
// TODO: Find ways of reducing these?  Reduce properties on them?  Map is very heavy.

// Interestingly, this is ~60 when just calling realm.types.number(), but ~110 when we create
// a realm function to return the number.
export const PRIMITIVE_OVERHEAD_BYTES = 110;

/**
 * Overhead of an empty Map()
 */
export const JS_MAP_OVERHEAD_BYTES = 196;

// Roughly equivalent.  Off by a handful of bytes.
export const OBJECT_OVERHEAD_BYTES =
  PRIMITIVE_OVERHEAD_BYTES + JS_MAP_OVERHEAD_BYTES;

// Grossly high... Not entirely sure what is taking up all the space.  Environments?  AST nodes?
export const FUNCTION_OVERHEAD_BYTES = 2770;
