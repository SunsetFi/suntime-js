import { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import EvaluationContext from "../EvaluationContext.js";
import { Completion, NormalCompletion } from "../completions/index.js";

export default function* ifStatementNodeEvaluator(
  node: IfStatement,
  context: EvaluationContext,
) {
  const testResult = yield* EvaluateNodeCommand(node.test, context, {
    rethrow: true,
    forNormalValue: "IfStatement.test",
  });

  let result: Completion = NormalCompletion();
  if (testResult.toBoolean()) {
    result = yield* EvaluateNodeCommand(node.consequent, context);
  } else if (node.alternate) {
    result = yield* EvaluateNodeCommand(node.alternate, context);
  }

  switch (result.type) {
    case "break":
    case "continue":
    case "return":
      return result;
  }

  return NormalCompletion();
}
