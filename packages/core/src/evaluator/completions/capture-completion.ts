import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type { Completion } from "./Completion.js";
import isAbruptCompletion from "./AbruptCompletion.js";

export default function* captureCompletion(
  evaluator: () => EvaluationGenerator,
): EvaluationGenerator<Completion> {
  try {
    return yield* evaluator();
  } catch (e) {
    if (isAbruptCompletion(e)) {
      return e;
    }

    throw e;
  }
}
