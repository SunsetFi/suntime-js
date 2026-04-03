import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

import toString from "../algorithms/to-string.js";

import { isStaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsSymbol, StaticJsSymbol } from "../types/StaticJsSymbol.js";
import toPrimitive from "../algorithms/to-primitive.js";
import { StaticJsString } from "../types/StaticJsString.js";

// FIXME: Hacked up because sometimes we want a raw string, sometimes
// we want a wrapped string.
export function toPropertyKey(
  value: unknown,
  wrapped?: false,
): EvaluationGenerator<StaticJsPropertyKey>;
export function toPropertyKey(
  value: unknown,
  wrapped: true,
): EvaluationGenerator<StaticJsSymbol | StaticJsString>;
export function* toPropertyKey(
  value: unknown,
  wrapped?: boolean,
): EvaluationGenerator<StaticJsPropertyKey | StaticJsString> {
  if (!isStaticJsValue(value)) {
    return String(value);
  }

  const key = yield* toPrimitive(value, "string");
  if (isStaticJsSymbol(key)) {
    return key;
  }

  const asString = yield* toString(key);
  return wrapped ? asString : asString.value;
}
