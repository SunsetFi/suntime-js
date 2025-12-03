import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* iteratorValue(
  iteratorResult: StaticJsObjectLike,
): EvaluationGenerator<StaticJsValue> {
  return yield* iteratorResult.getEvaluator("value");
}
