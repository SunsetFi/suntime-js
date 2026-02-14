import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import toBoolean from "../algorithms/to-boolean.js";

export function* iteratorComplete(
  iteratorResult: StaticJsObjectLike,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  const doneValue = yield* iteratorResult.getEvaluator("done");
  return yield* toBoolean.js(doneValue, realm);
}
