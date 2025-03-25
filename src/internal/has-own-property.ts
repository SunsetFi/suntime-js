export default function hasOwnProperty<
  TObj extends {},
  TKey extends keyof TObj,
>(obj: TObj, key: TKey): obj is TObj & Required<Pick<TObj, TKey>>;
export default function hasOwnProperty<
  TObj extends {},
  TKey extends string | number | symbol,
>(obj: TObj, key: TKey): obj is TObj & Record<TKey, unknown>;
export default function hasOwnProperty<
  TObj extends {},
  TKey extends string | number | symbol,
>(obj: TObj, key: TKey): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
