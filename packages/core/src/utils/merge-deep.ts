export default function mergeDeep<A, B>(target: A, ...sources: B[]): A & B {
  if (!sources.length) return target as A & B;
  const source = sources.shift()!;

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep<unknown, unknown>(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

function isObject(item: unknown): item is Record<string, unknown> {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
