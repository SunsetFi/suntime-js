type WritableObject<T extends object> = {
  -readonly [P in keyof T]: Writable<T[P]>;
};

export type Writable<T> = T extends Function ? T : T extends object ? WritableObject<T> : T;
