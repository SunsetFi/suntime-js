type Tagged<T, TKind> = T & {
  readonly __kind: TKind;
};
export function symbolFor<TKey extends string>(key: TKey): Tagged<symbol, TKey> {
  return Symbol.for(`@suntime-js/core::${key}`) as Tagged<symbol, TKey>;
}

/**
 * Type guard for a symbol produced by {@link symbolFor}.
 *
 * Plain `===` comparisons against a `symbolFor(...)` constant don't narrow
 * the non-matching branch, since `Tagged<symbol, TKind>` is not a unit type
 * TypeScript can subtract from a union. Using this as an explicit type
 * predicate does narrow both branches.
 */
export function isTaggedSymbol<TTag extends Tagged<symbol, string>>(
  value: unknown,
  tag: TTag,
): value is TTag {
  return value === tag;
}
