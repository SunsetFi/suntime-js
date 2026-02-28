import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "./Completion.js";

import type { CompletionEvaluator } from "./CompletionEvaluator.js";

export default function captureThrownCompletion<T = Completion.Normal>(
  evaluator: CompletionEvaluator<T>,
): EvaluationGenerator<T | Completion.Abrupt>;
export default function captureThrownCompletion<T = Completion.Normal>(
  evaluator: CompletionEvaluator<T>,
  mapper: (completion: Completion.Abrupt) => T,
): EvaluationGenerator<T>;
export default function* captureThrownCompletion<T = Completion.Normal>(
  evaluator: CompletionEvaluator<T>,
  mapper: (completion: Completion.Abrupt) => T = (c) => c as T,
): EvaluationGenerator<unknown> {
  try {
    let resolved: T | Completion.Abrupt;
    if (!evaluator) {
      resolved = evaluator;
    } else if (
      evaluator &&
      typeof evaluator === "object" &&
      "next" in evaluator
    ) {
      resolved = yield* evaluator;
    } else {
      resolved = evaluator;
    }

    if (Completion.Abrupt.is(resolved)) {
      return mapper(resolved);
    }

    return resolved;
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      return mapper(e);
    }

    throw e;
  }
}
