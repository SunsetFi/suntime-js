import { ParenthesizedExpression } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationGenerator } from "../EvaluationGenerator.js";

// Not used by default by our babel parser settings, but we create them ourselves
// to work around our lack of AssignmentExpression in StaticJsAstFunction.
export default function* parenthesizedExpressionNodeEvaluator(
  node: ParenthesizedExpression,
): EvaluationGenerator {
  return yield* Q(EvaluateNodeCommand(node.expression));
}
