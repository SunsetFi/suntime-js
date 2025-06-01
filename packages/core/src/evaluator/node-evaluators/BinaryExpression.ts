import { BinaryExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsScalar } from "../../runtime/types/StaticJsScalar.js";
import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObject.js";
import { isStaticJsString } from "../../runtime/types/StaticJsString.js";

import strictEquality from "../../runtime/algorithms/strict-equality.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";
import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

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
    rethrow: true,
    forNormalValue: "BinaryExpression.left",
  });

  const right = yield* EvaluateNodeCommand(node.right, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.right",
  });

  const leftType = left.runtimeTypeOf;
  const rightType = right.runtimeTypeOf;
  const arithmatic =
    !isStaticJsNullOrUndefined(left) &&
    !isStaticJsNullOrUndefined(right) &&
    (leftType === "number" || rightType === "number");

  let leftValue: unknown;
  if (arithmatic) {
    // Coerce whatever it is to a number.
    leftValue = left.toNumber();
  } else if (isStaticJsScalar(left)) {
    leftValue = left.toJs();
  } else {
    // By reference.
    leftValue = left;
  }

  let rightValue: unknown;
  if (arithmatic) {
    // Coerce whatever it is to a number.
    rightValue = right.toNumber();
  } else if (isStaticJsScalar(right)) {
    rightValue = right.toJs();
  } else {
    // By reference.
    rightValue = right;
  }

  // One of them is a reference.
  return NormalCompletion(
    context.realm.types.boolean(
      negate ? leftValue != rightValue : leftValue == rightValue,
    ),
  );
}

function* binaryExpressionStrictEquals(
  node: BinaryExpression,
  context: EvaluationContext,
  negate: boolean,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.left",
  });
  const right = yield* EvaluateNodeCommand(node.right, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.right",
  });

  const result = strictEquality(left, right);
  return NormalCompletion(
    context.realm.types.boolean(negate ? !result : result),
  );
}

function* binaryExpressionAdd(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.left",
  });
  const right = yield* EvaluateNodeCommand(node.right, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.right",
  });

  if (!isStaticJsScalar(left) || !isStaticJsScalar(right)) {
    // One will become a string so both become a string.
    return NormalCompletion(
      context.realm.types.string(left.toString() + right.toString()),
    );
  }

  // Fall back to the primitive addition.
  // @ts-expect-error - Whatever the value, addition does what we want.
  const value = left.toJs() + right.toJs();
  return NormalCompletion(context.realm.types.toStaticJsValue(value));
}

function* numericComputation(
  func: (left: number, right: number) => unknown,
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.left",
  });
  const right = yield* EvaluateNodeCommand(node.right, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.right",
  });

  return NormalCompletion(
    context.realm.types.toStaticJsValue(
      func(left.toNumber(), right.toNumber()),
    ),
  );
}

function isStaticJsNullOrUndefined(value: StaticJsValue) {
  return ["null", "undefined"].includes(value.runtimeTypeOf);
}

function* inOperator(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeCommand(node.left, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.left",
  });
  const right = yield* EvaluateNodeCommand(node.right, context, {
    rethrow: true,
    forNormalValue: "BinaryExpression.right",
  });

  if (!isStaticJsObjectLike(right)) {
    return ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        "Right side of in operator must be an object",
      ),
    );
  }

  if (!isStaticJsString(left)) {
    return ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        "Left side of in operator must be a string",
      ),
    );
  }

  const hasProperty = yield* right.hasPropertyEvaluator(left.toString());
  return NormalCompletion(context.realm.types.boolean(hasProperty));
}
