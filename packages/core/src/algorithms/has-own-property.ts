import { Q } from "../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";

export function* hasOwnProperty(
  o: StaticJsObject,
  p: StaticJsPropertyKey,
): EvaluationGenerator<boolean> {
  const desc = yield* Q(o.getOwnPropertyEvaluator(p));
  if (!desc) {
    return false;
  }
  return true;
}
