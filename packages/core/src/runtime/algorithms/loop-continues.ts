import type { Completion } from "../../evaluator/completions/Completion.js";
import isAbruptCompletion from "../../evaluator/completions/AbruptCompletion.js";
import { ContinueCompletion } from "../../evaluator/completions/ContinueCompletion.js";

import type EvaluationContext from "../../evaluator/EvaluationContext.js";

export default function loopContinues(completion: Completion, context: EvaluationContext): boolean {
  if (!isAbruptCompletion(completion)) {
    return true;
  }

  if (!(completion instanceof ContinueCompletion)) {
    return false;
  }

  if (completion.target === null) {
    return true;
  }

  if (completion.target === context.label) {
    return true;
  }

  return false;
}
