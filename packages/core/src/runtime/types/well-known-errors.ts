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

const wellKnownErrorConstructors = new Map<new (...args: any[]) => Error, WellKnownErrorName>([
  [AggregateError, "AggregateError"],
  [Error, "Error"],
  [EvalError, "EvalError"],
  [RangeError, "RangeError"],
  [ReferenceError, "ReferenceError"],
  [SyntaxError, "SyntaxError"],
  [TypeError, "TypeError"],
  [URIError, "URIError"],
]);

export function getWellKnownErrorName(value: unknown): WellKnownErrorName | undefined {
  if (value instanceof Error === false) {
    return undefined;
  }

  const constructor = value.constructor;
  if (typeof constructor !== "function") {
    return undefined;
  }

  return wellKnownErrorConstructors.get(constructor as any);
}
