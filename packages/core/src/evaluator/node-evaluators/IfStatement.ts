import type { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";

export default function* ifStatementNodeEvaluator(node: IfStatement, context: EvaluationContext) {
  const testResult = yield* EvaluateNodeCommand(node.test, context, {
    forNormalValue: "IfStatement.test",
  });
  const condition = yield* toBoolean.js(testResult, context.realm);

  if (condition) {
    return yield* EvaluateNodeCommand(node.consequent, context);
  } else if (node.alternate) {
    return yield* EvaluateNodeCommand(node.alternate, context);
  }

  return null;
}
