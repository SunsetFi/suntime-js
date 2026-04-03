import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import toBoolean from "../algorithms/to-boolean.js";
import { get } from "../algorithms/get.js";

export function* iteratorComplete(
  iteratorResult: StaticJsObjectLike,
): EvaluationGenerator<boolean> {
  const doneValue = yield* get(iteratorResult, "done");
  return yield* toBoolean.js(doneValue);
}
