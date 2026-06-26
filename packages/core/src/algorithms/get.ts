import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "#types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

export function* get(
  o: StaticJsObject,
  p: StaticJsPropertyKey,
): EvaluationGenerator<StaticJsValue> {
  return yield* o.getEvaluator(p, o);
}
