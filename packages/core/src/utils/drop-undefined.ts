export type DropUndefined<T> = {
  [K in keyof T as Exclude<T[K], undefined> extends never ? never : K]?: T[K];
};

export default function dropUndefined<T extends object>(obj: T): DropUndefined<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined),
  ) as DropUndefined<T>;
}
