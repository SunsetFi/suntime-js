import type { SequenceExpression } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* sequenceExpressionNodeEvaluator(
  node: SequenceExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  for (const expr of node.expressions) {
    yield* EvaluateNodeCommand(expr, context);
  }

  return null;
}
