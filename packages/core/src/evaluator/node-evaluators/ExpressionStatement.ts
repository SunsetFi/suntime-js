import type { ExpressionStatement } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

export default function* expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // Convert whatever it was into a value.
  // Needed so that "obj.a" evaluates when nothing else is done to it.
  return yield* Q.val(
    EvaluateNodeCommand(node.expression, context),
    context.realm,
  );
}
