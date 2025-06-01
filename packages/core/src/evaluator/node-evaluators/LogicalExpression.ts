import type { LogicalExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

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
      throw new StaticJsEngineError(
        `LogicalExpression operator ${node.operator} is not supported`,
      );
  }
}

function* logicalExpressionAnd(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "LogicalExpression.left",
  });
  if (left.toBoolean()) {
    const right = yield* EvaluateNodeCommand(node.right, context, {
      forNormalValue: "LogicalExpression.right",
    });

    return right;
  }

  return left;
}

function* logicalExpressionOr(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "LogicalExpression.left",
  });

  if (left.toBoolean()) {
    return left;
  }

  const right = yield* EvaluateNodeCommand(node.right, context, {
    forNormalValue: "LogicalExpression.right",
  });

  return right;
}

function* logicalExpressionNullishCoalescing(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "LogicalExpression.left",
  });

  if (["null", "undefined"].includes(left.runtimeTypeOf)) {
    const right = yield* EvaluateNodeCommand(node.right, context, {
      forNormalValue: "LogicalExpression.right",
    });
    return right;
  }

  return left;
}
