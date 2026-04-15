import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

export function* deletePropertyOrThrow(
  obj: StaticJsObject,
  p: StaticJsPropertyKey,
): EvaluationGenerator<void> {
  const success = yield* obj.deleteEvaluator(p);
  if (!success) {
    throw Completion.Throw("TypeError", "Cannot delete property");
  }
}
