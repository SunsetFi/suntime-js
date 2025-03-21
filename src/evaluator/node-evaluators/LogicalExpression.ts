import { LogicalExpression } from "@babel/types";

import { StaticJsEnvironment } from "../../environment/index.js";
import { staticJsInstanceOf } from "../../environment/types/StaticJsTypeSymbol.js";

import { evaluateNodeAssertValue } from "./evaluate-node.js";

export default function logicalExpressionNodeEvaluator(
  node: LogicalExpression,
  env: StaticJsEnvironment,
) {
  switch (node.operator) {
    case "&&":
      return logicalExpressionAnd(node, env);
    case "||":
      return logicalExpressionOr(node, env);
    case "??":
      return logicalExpressionNullishCoalescing(node, env);
    default:
      throw new Error(
        `LogicalExpression operator ${node.operator} is not supported`,
      );
  }
}

function logicalExpressionAnd(
  node: LogicalExpression,
  env: StaticJsEnvironment,
) {
  const left = evaluateNodeAssertValue(node.left, env);
  if (left.toBoolean()) {
    return evaluateNodeAssertValue(node.right, env);
  }

  return left;
}

function logicalExpressionOr(
  node: LogicalExpression,
  env: StaticJsEnvironment,
) {
  const left = evaluateNodeAssertValue(node.left, env);
  if (left.toBoolean()) {
    return left;
  }

  return evaluateNodeAssertValue(node.right, env);
}

function logicalExpressionNullishCoalescing(
  node: LogicalExpression,
  env: StaticJsEnvironment,
) {
  const left = evaluateNodeAssertValue(node.left, env);
  if (["null", "undefined"].includes(staticJsInstanceOf(left)!)) {
    return evaluateNodeAssertValue(node.right, env);
  }

  return left;
}
