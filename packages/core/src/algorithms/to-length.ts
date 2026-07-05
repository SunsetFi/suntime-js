import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { Q } from "#evaluator/completions/Q.js";
import { MAX_ARRAYLIKE_LENGTH_INCLUSIVE } from "#types/StaticJsArray.js";

import { toIntegerOrInfinity } from "./to-integer-or-infinity.js";

export function* toLength(arg: StaticJsValue): EvaluationGenerator<number> {
  const length = yield* Q(toIntegerOrInfinity.js(arg));
  if (length <= 0) {
    return 0;
  }

  return Math.min(length, MAX_ARRAYLIKE_LENGTH_INCLUSIVE);
}
