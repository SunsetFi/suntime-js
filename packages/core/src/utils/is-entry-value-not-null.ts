export function isEntryValueNotNull<K, T>(
  entry: [K, T | null | undefined],
): entry is [K, NonNullable<T>] {
  return entry[1] != null;
}
