export type DropUndefined<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};

export function dropUndefined<T extends object>(obj: T): DropUndefined<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined),
  ) as DropUndefined<T>;
}
