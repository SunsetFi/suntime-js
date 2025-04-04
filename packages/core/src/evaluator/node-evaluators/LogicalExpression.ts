import { LogicalExpression } from "@babel/types";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import {
  EvaluateNodeAssertValueCommand,
  EvaluateNodeCommand,
} from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

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
    return NormalCompletion(
      yield* EvaluateNodeAssertValueCommand(node.right, context),
    );
  }

  return NormalCompletion(left);
}

function* logicalExpressionOr(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const leftCompletion = yield* EvaluateNodeCommand(node.left, context);
  if (leftCompletion.type === "throw") {
    return leftCompletion;
  }
  if (leftCompletion.type !== "normal" || !leftCompletion.value) {
    throw new Error(
      "Expected logical expression left completion to be normal and have a value",
    );
  }
  const left = leftCompletion.value;

  if (left.toBoolean()) {
    return NormalCompletion(left);
  }

  const rightCompletion = yield* EvaluateNodeCommand(node.right, context);
  if (rightCompletion.type === "throw") {
    return rightCompletion;
  }
  if (rightCompletion.type !== "normal" || !rightCompletion.value) {
    throw new Error(
      "Expected logical expression right completion to be normal and have a value",
    );
  }

  const right = rightCompletion.value;

  return NormalCompletion(right);
}

function* logicalExpressionNullishCoalescing(
  node: LogicalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const leftCompletion = yield* EvaluateNodeCommand(node.left, context);
  if (leftCompletion.type === "throw") {
    return leftCompletion;
  }
  if (leftCompletion.type !== "normal" || !leftCompletion.value) {
    throw new Error(
      "Expected logical expression left completion to be normal and have a value",
    );
  }
  const left = leftCompletion.value;

  if (["null", "undefined"].includes(left.runtimeTypeOf)) {
    const rightCompletion = yield* EvaluateNodeCommand(node.right, context);
    if (rightCompletion.type === "throw") {
      return rightCompletion;
    }
    if (rightCompletion.type !== "normal" || !rightCompletion.value) {
      throw new Error(
        "Expected logical expression right completion to be normal and have a value",
      );
    }

    const right = rightCompletion.value;
    return NormalCompletion(right);
  }

  return NormalCompletion(left);
}
