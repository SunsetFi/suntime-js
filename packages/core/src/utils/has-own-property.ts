export function hasOwnProperty<TObj extends object, TKey extends keyof TObj>(
  obj: TObj,
  key: TKey,
): obj is TObj & Required<Pick<TObj, TKey>>;
export function hasOwnProperty<TObj extends object, TKey extends string | number | symbol>(
  obj: TObj,
  key: TKey,
): obj is TObj & Record<TKey, unknown>;
export function hasOwnProperty(obj: unknown, key: string | number | symbol): boolean;
export function hasOwnProperty<TObj extends object, TKey extends string | number | symbol>(
  obj: TObj,
  key: TKey,
): boolean {
  return Object.hasOwn(obj, key);
}
