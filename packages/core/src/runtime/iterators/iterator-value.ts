import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { get } from "../algorithms/get.js";

export function* iteratorValue(iteratorResult: StaticJsObject): EvaluationGenerator<StaticJsValue> {
  return yield* get(iteratorResult, "value");
}
