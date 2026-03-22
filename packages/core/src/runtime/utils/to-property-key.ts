import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";

import toString from "../algorithms/to-string.js";

import { isStaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

export default function* toPropertyKey(value: unknown): EvaluationGenerator<StaticJsPropertyKey> {
  if (!isStaticJsValue(value)) {
    return String(value);
  }

  if (isStaticJsSymbol(value)) {
    return value;
  }

  const asString = yield* toString(value);
  return asString.value;
}
