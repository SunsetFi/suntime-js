import { Completion } from "../../evaluator/completions/Completion.js";
import EvaluationContext from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike, StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsPropertyDescriptor } from "../types/StaticJsPropertyDescriptor.js";

export default function* definePropertyOrThrow(
  O: StaticJsObjectLike,
  P: StaticJsPropertyKey,
  desc: Partial<StaticJsPropertyDescriptor>,
): EvaluationGenerator<void> {
  const success = yield* O.defineOwnPropertyEvaluator(P, desc);

  if (!success) {
    const { realm } = EvaluationContext.current;
    throw Completion.Throw(realm.types.error("TypeError", `Cannot define property ${String(P)}`));
  }
}
