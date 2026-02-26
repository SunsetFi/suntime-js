import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsObjectLike, StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsPropertyDescriptor } from "../types/StaticJsPropertyDescriptor.js";

export default function* definePropertyOrThrow(
  O: StaticJsObjectLike,
  P: StaticJsPropertyKey,
  desc: StaticJsPropertyDescriptor,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  const success = yield* O.defineOwnPropertyEvaluator(P, desc);

  if (!success) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", `Cannot define property ${String(P)}`),
    );
  }
}
