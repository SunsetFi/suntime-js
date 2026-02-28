import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "./Completion.js";

import type { CompletionEvaluator } from "./CompletionEvaluator.js";

export default function* captureThrownCompletion<
  T extends object | null = Completion.Normal,
>(
  evaluator: CompletionEvaluator<T>,
): EvaluationGenerator<T | Completion.Abrupt> {
  try {
    let resolved: T | Completion.Abrupt;
    if (typeof evaluator === "function") {
      resolved = evaluator();
    } else if (!evaluator) {
      resolved = evaluator;
    } else if ("next" in evaluator) {
      resolved = yield* evaluator;
    } else {
      resolved = evaluator;
    }

    return resolved;
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      return e;
    }

    throw e;
  }
}
