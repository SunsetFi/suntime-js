import { IfStatement } from "@babel/types";

import {
  EvaluateNodeAssertValueCommand,
  EvaluateNodeCommand,
} from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationResult, {
  isControlFlowEvaluationResult,
} from "../EvaluationResult.js";

export default function* ifStatementNodeEvaluator(
  node: IfStatement,
  context: EvaluationContext,
) {
  const testResult = yield* EvaluateNodeAssertValueCommand(node.test, context);

  let result: EvaluationResult | null = null;
  if (testResult.toBoolean()) {
    result = yield* EvaluateNodeCommand(node.consequent, context);
  } else if (node.alternate) {
    result = yield* EvaluateNodeCommand(node.alternate, context);
  }

  if (isControlFlowEvaluationResult(result)) {
    return result;
  }

  return null;
}
