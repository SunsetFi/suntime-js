import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { get } from "../algorithms/get.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function* iteratorValue(
  iteratorResult: StaticJsObjectLike,
): EvaluationGenerator<StaticJsValue> {
  return yield* get(iteratorResult, "value");
}
