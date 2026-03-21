import type { LogicalExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import StaticJsTypeCode from "../../runtime/types/StaticJsTypeCode.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
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
      throw new StaticJsEngineError(`LogicalExpression operator ${node.operator} is not supported`);
  }
}

function* logicalExpressionAnd(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);
  const leftBoolean = yield* toBoolean.js(left, realm);

  if (leftBoolean) {
    const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

    return right;
  }

  return left;
}

function* logicalExpressionOr(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);
  const leftBoolean = yield* toBoolean.js(left, realm);

  if (leftBoolean) {
    return left;
  }

  const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

  return right;
}

function* logicalExpressionNullishCoalescing(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);

  if (
    left.runtimeTypeCode === StaticJsTypeCode.Null ||
    left.runtimeTypeCode === StaticJsTypeCode.Undefined
  ) {
    const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);
    return right;
  }

  return left;
}
