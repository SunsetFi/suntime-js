import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

export function* hasProperty(
  obj: StaticJsObject,
  propertyKey: StaticJsPropertyKey,
): EvaluationGenerator<boolean> {
  return yield* obj.hasPropertyEvaluator(propertyKey);
}
