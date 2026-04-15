import type { ExpressionStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* expressionStatementNodeEvaluator(
  node: ExpressionStatement,
): EvaluationGenerator {
  // Convert whatever it was into a value.
  // Needed so that "obj.a" evaluates when nothing else is done to it.
  return yield* Q.val(EvaluateNodeCommand(node.expression));
}
