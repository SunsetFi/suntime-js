import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectPropertyKey } from "../../types/StaticJsObjectLike.js";

import toString from "../../algorithms/to-string.js";

import { isStaticJsValue } from "../StaticJsValue.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";

export default function* toPropertyKey(
  value: unknown,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectPropertyKey> {
  if (!isStaticJsValue(value)) {
    return String(value);
  }

  if (isStaticJsSymbol(value)) {
    return value;
  }

  const asString = yield* toString(value, realm);
  return asString.value;
}
