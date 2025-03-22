import { LogicalExpression } from "@babel/types";

import { staticJsInstanceOf } from "../../runtime/primitives/StaticJsTypeSymbol.js";

import { evaluateNodeAssertValue } from "./nodes.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function logicalExpressionNodeEvaluator(
  node: LogicalExpression,
  context: NodeEvaluationContext,
) {
  switch (node.operator) {
    case "&&":
      return logicalExpressionAnd(node, context);
    case "||":
      return logicalExpressionOr(node, context);
    case "??":
      return logicalExpressionNullishCoalescing(node, context);
    default:
      throw new Error(
        `LogicalExpression operator ${node.operator} is not supported`,
      );
  }
}

function logicalExpressionAnd(
  node: LogicalExpression,
  context: NodeEvaluationContext,
) {
  const left = evaluateNodeAssertValue(node.left, context);
  if (left.toBoolean()) {
    return evaluateNodeAssertValue(node.right, context);
  }

  return left;
}

function logicalExpressionOr(
  node: LogicalExpression,
  context: NodeEvaluationContext,
) {
  const left = evaluateNodeAssertValue(node.left, context);
  if (left.toBoolean()) {
    return left;
  }

  return evaluateNodeAssertValue(node.right, context);
}

function logicalExpressionNullishCoalescing(
  node: LogicalExpression,
  context: NodeEvaluationContext,
) {
  const left = evaluateNodeAssertValue(node.left, context);
  if (["null", "undefined"].includes(staticJsInstanceOf(left)!)) {
    return evaluateNodeAssertValue(node.right, context);
  }

  return left;
}
