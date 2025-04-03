import { ExpressionStatement } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";

export default function* expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const result = yield* EvaluateNodeCommand(node.expression, context);

  if (result.type !== "throw" && result.type !== "normal") {
    throw new Error(
      `Expected node type ${node.type} to return a NormalCompletion or ThrowCompletion, but got ${result.type}.`,
    );
  }

  return result;
}
