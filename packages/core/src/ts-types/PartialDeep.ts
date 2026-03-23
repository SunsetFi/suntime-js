export type PartialDeep<T> = T extends Function
  ? T
  : T extends object
    ? {
        [K in keyof T]?: PartialDeep<T[K]>;
      }
    : T;
