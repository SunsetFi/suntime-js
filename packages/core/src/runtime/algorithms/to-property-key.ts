import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsPropertyKey, type StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";
import { isStaticJsValue, StaticJsValue } from "../types/StaticJsValue.js";

import { toPrimitive } from "./to-primitive.js";
import { toString } from "./to-string.js";

export function* toPropertyKey(
  value: StaticJsValue | StaticJsPropertyKey,
): EvaluationGenerator<StaticJsPropertyKey> {
  // Weirdness: We call this with ReferenceRecord.referencedName, which can be resolved
  // to a property key already.
  if (isStaticJsPropertyKey(value)) {
    return value;
  }

  if (!isStaticJsValue(value)) {
    throw new StaticJsEngineError("Cannot convert non-StaticJsValue to property key.");
  }

  const key = yield* toPrimitive(value, "string");
  if (isStaticJsSymbol(key)) {
    return key;
  }

  const asString = yield* toString.js(key);
  return asString;
}
