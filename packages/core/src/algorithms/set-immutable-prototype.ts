import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { Q } from "#evaluator/completions/Q.js";

import { sameValue } from "./same-value.js";

export function* setImmutablePrototype(
  obj: StaticJsObject,
  proto: StaticJsObject | null,
): EvaluationGenerator<boolean> {
  let current: StaticJsObject | null = yield* Q(obj.getPrototypeOfEvaluator());

  // Nonsense hacks because we use real null instead of StaticJsNull for protos.
  if (current === null) {
    if (proto === null) {
      return true;
    }
    return false;
  } else if (proto === null) {
    return false;
  }

  if (!sameValue(current, proto)) {
    return true;
  }

  return false;
}
