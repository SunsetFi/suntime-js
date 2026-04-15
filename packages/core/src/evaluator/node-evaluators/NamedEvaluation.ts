import type { Node } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsFunctionNameable } from "../../runtime/algorithms/set-function-name.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

const NamedEvaluationParameterName = "NamedEvaluation::name";

export function getNamedEvaluationParameter(
  context?: EvaluationContext,
): StaticJsFunctionNameable | null {
  return (context ?? EvaluationContext.current).parameter(NamedEvaluationParameterName, String);
}

export default function* NamedEvaluation(
  name: StaticJsFunctionNameable,
  node: Node,
): EvaluationGenerator {
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
