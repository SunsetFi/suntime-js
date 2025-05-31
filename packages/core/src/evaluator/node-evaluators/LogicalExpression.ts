import { LogicalExpression } from "@babel/types";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { NormalCompletion } from "../completions/index.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

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
    rethrow: true,
    forNormalValue: "LogicalExpression.left",
  });
  if (left.toBoolean()) {
    const right = yield* EvaluateNodeCommand(node.right, context, {
      rethrow: true,
      forNormalValue: "LogicalExpression.right",
    });

    return NormalCompletion(right);
  }

  return NormalCompletion(left);
}

function* logicalExpressionOr(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    rethrow: true,
    forNormalValue: "LogicalExpression.left",
  });

  if (left.toBoolean()) {
    return NormalCompletion(left);
  }

  const right = yield* EvaluateNodeCommand(node.right, context, {
    rethrow: true,
    forNormalValue: "LogicalExpression.right",
  });

  return NormalCompletion(right);
}

function* logicalExpressionNullishCoalescing(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    rethrow: true,
    forNormalValue: "LogicalExpression.left",
  });

  if (["null", "undefined"].includes(left.runtimeTypeOf)) {
    const right = yield* EvaluateNodeCommand(node.right, context, {
      rethrow: true,
      forNormalValue: "LogicalExpression.right",
    });
    return NormalCompletion(right);
  }

  return NormalCompletion(left);
}
