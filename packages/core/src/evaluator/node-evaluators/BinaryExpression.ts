import type { BinaryExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObject.js";
import { isStaticJsString } from "../../runtime/types/StaticJsString.js";

import strictEquality from "../../runtime/algorithms/strict-equality.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";
import abstractEquality from "../../runtime/algorithms/abstract-equality.js";
import toNumber from "../../runtime/algorithms/to-number.js";
import addition from "../../runtime/algorithms/addition.js";

export default function binaryExpressionNodeEvaluator(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  switch (node.operator) {
    case "+":
      return binaryExpressionAdd(node, context);
    case "-":
      return numericComputation((a, b) => a - b, node, context);
    case "*":
      return numericComputation((a, b) => a * b, node, context);
    case "/":
      return numericComputation((a, b) => a / b, node, context);
    case "%":
      return numericComputation((a, b) => a % b, node, context);
    case "**":
      return numericComputation((a, b) => a ** b, node, context);
    case "^":
      return numericComputation((a, b) => a ^ b, node, context);
    case "<<":
      return numericComputation((a, b) => a << b, node, context);
    case ">>":
      return numericComputation((a, b) => a >> b, node, context);
    case "&":
      return numericComputation((a, b) => a & b, node, context);
    case "|":
      return numericComputation((a, b) => a | b, node, context);
    case "==":
      return binaryExpressionDoubleEquals(node, context, false);
    case "!=":
      return binaryExpressionDoubleEquals(node, context, true);
    case "===":
      return binaryExpressionStrictEquals(node, context, false);
    case "!==":
      return binaryExpressionStrictEquals(node, context, true);
    case "<":
      return numericComputation((a, b) => a < b, node, context);
    case "<=":
      return numericComputation((a, b) => a <= b, node, context);
    case ">":
      return numericComputation((a, b) => a > b, node, context);
    case ">=":
      return numericComputation((a, b) => a >= b, node, context);
    case ">>>":
      return numericComputation((a, b) => a >>> b, node, context);
    case "in":
      return inOperator(node, context);
    default:
      throw new StaticJsEngineError(
        `BinaryExpression operator ${node.operator} is not supported`,
      );
  }
}

function* binaryExpressionDoubleEquals(
  node: BinaryExpression,
  context: EvaluationContext,
  negate: boolean,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "BinaryExpression.left",
  });

  const right = yield* EvaluateNodeCommand(node.right, context, {
    forNormalValue: "BinaryExpression.right",
  });

  const value = yield* abstractEquality(left, right, context.realm);

  if (negate) {
    return context.realm.types.boolean(!value.value);
  }

  return value;
}

function* binaryExpressionStrictEquals(
  node: BinaryExpression,
  context: EvaluationContext,
  negate: boolean,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "BinaryExpression.left",
  });
  const right = yield* EvaluateNodeCommand(node.right, context, {
    forNormalValue: "BinaryExpression.right",
  });

  const result = yield* strictEquality(left, right, context.realm);

  if (negate) {
    return context.realm.types.boolean(!result.value);
  }

  return result;
}

function* binaryExpressionAdd(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "BinaryExpression.left",
  });
  const right = yield* EvaluateNodeCommand(node.right, context, {
    forNormalValue: "BinaryExpression.right",
  });

  return yield* addition(left, right, context.realm);
}

function* numericComputation(
  func: (left: number, right: number) => unknown,
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "BinaryExpression.left",
  });
  let right = yield* EvaluateNodeCommand(node.right, context, {
    forNormalValue: "BinaryExpression.right",
  });

  left = yield* toNumber(left, context.realm);
  right = yield* toNumber(right, context.realm);

  return context.realm.types.toStaticJsValue(func(left.value, right.value));
}

function* inOperator(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    forNormalValue: "BinaryExpression.left",
  });
  const right = yield* EvaluateNodeCommand(node.right, context, {
    forNormalValue: "BinaryExpression.right",
  });

  if (!isStaticJsObjectLike(right)) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        "Right side of in operator must be an object",
      ),
    );
  }

  if (!isStaticJsString(left)) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        "Left side of in operator must be a string",
      ),
    );
  }

  const hasProperty = yield* right.hasPropertyEvaluator(left.toStringSync());
  return context.realm.types.boolean(hasProperty);
}
