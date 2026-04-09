import typedKeys from "./typed-keys.js";

export default function omit<T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> {
  const result = {} as Record<keyof T, unknown>;
  for (const key of typedKeys(obj)) {
    if (!keys.includes(key as K)) {
      result[key] = obj[key];
    }
  }
  return result as Omit<T, K>;
}
