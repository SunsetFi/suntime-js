import type { ExpressionStatement } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

export default function* expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  return yield* EvaluateNodeCommand(node.expression, context);
}
