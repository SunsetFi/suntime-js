import type { Node } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Q } from "../completions/Q.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

const NamedEvaluationParameterName = "NamedEvaluation::name";

export function getNamedEvaluationParameter(context?: EvaluationContext): string | null {
  return (context ?? EvaluationContext.current).parameter(NamedEvaluationParameterName, String);
}

export default function* NamedEvaluation(name: string | null, node: Node): EvaluationGenerator {
  const context = EvaluationContext.current;
  const oldParameters = context.evaluationParameters;
  context.evaluationParameters = {
    ...context.evaluationParameters,
    // Can be null
    [NamedEvaluationParameterName]: name,
  };
  try {
    const completion = yield* EvaluateNodeCommand(node);
    return yield* Q(completion);
  } finally {
    context.evaluationParameters = oldParameters;
  }
}
