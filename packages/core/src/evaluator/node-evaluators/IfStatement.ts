import type { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";

export default function* ifStatementNodeEvaluator(
  node: IfStatement,
  context: EvaluationContext,
) {
  let testResult = yield* EvaluateNodeCommand(node.test, context, {
    forNormalValue: "IfStatement.test",
  });
  testResult = yield* toBoolean(testResult, context.realm);

  if (testResult.value) {
    return yield* EvaluateNodeCommand(node.consequent, context);
  } else if (node.alternate) {
    return yield* EvaluateNodeCommand(node.alternate, context);
  }

  return null;
}
