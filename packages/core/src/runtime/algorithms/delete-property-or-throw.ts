import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import type {
  StaticJsObjectLike,
  StaticJsPropertyKey,
} from "../types/StaticJsObjectLike.js";

export default function* deletePropertyOrThrow(
  obj: StaticJsObjectLike,
  p: StaticJsPropertyKey,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  const success = yield* obj.deleteEvaluator(p);
  if (!success) {
    throw Completion.Throw(
      realm.types.error("TypeError", "Cannot delete property"),
    );
  }
}
