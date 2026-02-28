import { Completion } from "../../evaluator/completions/Completion.js";

import type EvaluationContext from "../../evaluator/EvaluationContext.js";

export default function loopContinues(completion: Completion, context: EvaluationContext): boolean {
  if (!Completion.Abrupt.is(completion)) {
    return true;
  }

  if (!Completion.Continue.is(completion)) {
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
