import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

import { get } from "../algorithms/get.js";
import toBoolean from "../algorithms/to-boolean.js";

export function* iteratorComplete(iteratorResult: StaticJsObject): EvaluationGenerator<boolean> {
  const doneValue = yield* get(iteratorResult, "done");
  return yield* toBoolean.js(doneValue);
}
