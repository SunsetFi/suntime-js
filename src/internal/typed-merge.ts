export default function typedMerge<T extends {}, T2 extends {}>(
  a: T,
  b: T2,
): T & T2 {
  return Object.assign(a, b) as any;
}
