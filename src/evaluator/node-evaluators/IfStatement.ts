import { IfStatement } from "@babel/types";
import { NodeEvaluationContext } from "./node-evaluation-context.js";
import { evaluateNode, evaluateNodeAssertValue } from "./nodes.js";
import {
  isControlFlowEvaluationResult,
  NodeEvaluationResult,
} from "./node-evaluation-result.js";

export default function ifStatementNodeEvaluator(
  node: IfStatement,
  context: NodeEvaluationContext,
) {
  const testResult = evaluateNodeAssertValue(node.test, context);

  let result: NodeEvaluationResult | null = null;
  if (testResult.toBoolean()) {
    result = evaluateNode(node.consequent, context);
  } else if (node.alternate) {
    result = evaluateNode(node.alternate, context);
  }

  if (isControlFlowEvaluationResult(result)) {
    return result;
  }

  return null;
}
