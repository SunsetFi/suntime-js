import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { get } from "../algorithms/get.js";
import { toBoolean } from "../algorithms/to-boolean.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

export function* iteratorComplete(iteratorResult: StaticJsObject): EvaluationGenerator<boolean> {
  const doneValue = yield* get(iteratorResult, "done");
  return yield* toBoolean.js(doneValue);
}
