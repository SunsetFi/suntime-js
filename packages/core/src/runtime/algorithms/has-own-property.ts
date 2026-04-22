import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

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
