import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

import { Completion } from "../../evaluator/completions/Completion.js";

export default function* deletePropertyOrThrow(
  obj: StaticJsObject,
  p: StaticJsPropertyKey,
): EvaluationGenerator<void> {
  const success = yield* obj.deleteEvaluator(p);
  if (!success) {
    throw Completion.Throw("TypeError", "Cannot delete property");
  }
}
