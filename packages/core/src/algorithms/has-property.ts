import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";

export function* hasProperty(
  obj: StaticJsObject,
  propertyKey: StaticJsPropertyKey,
): EvaluationGenerator<boolean> {
  return yield* obj.hasPropertyEvaluator(propertyKey);
}
