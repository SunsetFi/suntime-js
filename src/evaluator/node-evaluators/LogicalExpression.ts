import { LogicalExpression } from "@babel/types";

import { staticJsInstanceOf } from "../../runtime/primitives/StaticJsTypeSymbol.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";

export default function logicalExpressionNodeEvaluator(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
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

function* logicalExpressionAnd(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  if (left.toBoolean()) {
    return yield* EvaluateNodeAssertValueCommand(node.right, context);
  }

  return left;
}

function* logicalExpressionOr(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  if (left.toBoolean()) {
    return left;
  }

  return yield* EvaluateNodeAssertValueCommand(node.right, context);
}

function* logicalExpressionNullishCoalescing(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  if (["null", "undefined"].includes(staticJsInstanceOf(left)!)) {
    return yield* EvaluateNodeAssertValueCommand(node.right, context);
  }

  return left;
}
