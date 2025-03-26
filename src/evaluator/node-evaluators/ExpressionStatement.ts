import { ExpressionStatement } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

export default function* expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const result = yield* EvaluateNodeAssertValueCommand(
    node.expression,
    context,
  );
  return NormalCompletion(result);
}
