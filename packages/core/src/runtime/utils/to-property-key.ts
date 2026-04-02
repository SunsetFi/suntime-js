import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

import toString from "../algorithms/to-string.js";

import { isStaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

export function* toPropertyKey(value: unknown): EvaluationGenerator<StaticJsPropertyKey> {
  if (!isStaticJsValue(value)) {
    return String(value);
  }

  if (isStaticJsSymbol(value)) {
    return value;
  }

  const asString = yield* toString(value);
  return asString.value;
}
