import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsObjectLike, StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";

export default function* deletePropertyOrThrow(
  obj: StaticJsObjectLike,
  p: StaticJsPropertyKey,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  const success = yield* obj.deleteEvaluator(p);
  if (!success) {
    throw new ThrowCompletion(realm.types.error("TypeError", "Cannot delete property"));
  }
}
