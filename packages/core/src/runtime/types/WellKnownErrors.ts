export const WellKnownErrorNames = [
  "AggregateError",
  "Error",
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",
] as const;
export type WellKnownErrorName = (typeof WellKnownErrorNames)[number];

export function isWellKnownErrorName(name: string): name is WellKnownErrorName {
  return WellKnownErrorNames.includes(name as WellKnownErrorName);
}

export function isWellKnownError(value: unknown): value is Error & { name: WellKnownErrorName } {
  // This does let users override [Symbol.hasInstance]
  return (
    value instanceof AggregateError ||
    value instanceof Error ||
    value instanceof EvalError ||
    value instanceof RangeError ||
    value instanceof ReferenceError ||
    value instanceof SyntaxError ||
    value instanceof TypeError ||
    value instanceof URIError
  );
}
