import type { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";

export default function* ifStatementNodeEvaluator(
  node: IfStatement,
  context: EvaluationContext,
) {
  const testResult = yield* EvaluateNodeCommand(node.test, context, {
    forNormalValue: "IfStatement.test",
  });

  if (testResult.toBoolean()) {
    return yield* EvaluateNodeCommand(node.consequent, context);
  } else if (node.alternate) {
    return yield* EvaluateNodeCommand(node.alternate, context);
  }

  return null;
}
