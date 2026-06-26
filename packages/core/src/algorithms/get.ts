import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function* get(
  o: StaticJsObject,
  p: StaticJsPropertyKey,
): EvaluationGenerator<StaticJsValue> {
  return yield* o.getEvaluator(p, o);
}
