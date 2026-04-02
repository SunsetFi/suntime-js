import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

export default function* deletePropertyOrThrow(
  obj: StaticJsObjectLike,
  p: StaticJsPropertyKey,
): EvaluationGenerator<void> {
  const success = yield* obj.deleteEvaluator(p);
  if (!success) {
    throw Completion.Throw("TypeError", "Cannot delete property");
  }
}
