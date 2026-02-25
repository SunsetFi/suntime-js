export default function typedMerge<T extends object, T2 extends object>(a: T, b: T2): T & T2 {
  return Object.assign(a, b) as T & T2;
}
