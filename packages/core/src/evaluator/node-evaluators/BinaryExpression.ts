import { BinaryExpression } from "@babel/types";

import {
  StaticJsValue,
  isStaticJsScalar,
  isStaticJsObjectLike,
  isStaticJsString,
} from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import { NormalCompletion, ThrowCompletion } from "../completions/index.js";

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
      return binaryExpressionTrippleEquals(node, context, false);
    case "!==":
      return binaryExpressionTrippleEquals(node, context, true);
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
      throw new Error(
        `BinaryExpression operator ${node.operator} is not supported`,
      );
  }
}

function* binaryExpressionDoubleEquals(
  node: BinaryExpression,
  context: EvaluationContext,
  negate: boolean,
): EvaluationGenerator {
  const leftCompletion = yield* EvaluateNodeCommand(node.left, context);
  if (leftCompletion.type === "throw") {
    return leftCompletion;
  }
  if (leftCompletion.type !== "normal" || !leftCompletion.value) {
    throw new Error(
      "Expected left completion to return a value, but got undefined",
    );
  }

  const left = leftCompletion.value;

  const rightCompletion = yield* EvaluateNodeCommand(node.right, context);
  if (rightCompletion.type === "throw") {
    return rightCompletion;
  }
  if (rightCompletion.type !== "normal" || !rightCompletion.value) {
    throw new Error(
      "Expected right completion to return a value, but got undefined",
    );
  }
  const right = rightCompletion.value;

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

function* binaryExpressionTrippleEquals(
  node: BinaryExpression,
  context: EvaluationContext,
  negate: boolean,
): EvaluationGenerator {
  const leftCompletion = yield* EvaluateNodeCommand(node.left, context);
  if (leftCompletion.type === "throw") {
    return leftCompletion;
  }
  if (leftCompletion.type !== "normal" || !leftCompletion.value) {
    throw new Error(
      "Expected left completion to return a value, but got undefined",
    );
  }

  const left = leftCompletion.value;

  const rightCompletion = yield* EvaluateNodeCommand(node.right, context);
  if (rightCompletion.type === "throw") {
    return rightCompletion;
  }
  if (rightCompletion.type !== "normal" || !rightCompletion.value) {
    throw new Error(
      "Expected right completion to return a value, but got undefined",
    );
  }
  const right = rightCompletion.value;

  if (left.runtimeTypeOf !== right.runtimeTypeOf) {
    return NormalCompletion(context.realm.types.false);
  }

  let comparisonResult: boolean;
  if (isStaticJsScalar(left)) {
    comparisonResult = negate
      ? left.toJs() !== right.toJs()
      : left.toJs() === right.toJs();
  } else {
    comparisonResult = negate ? left !== right : left === right;
  }

  return NormalCompletion(context.realm.types.boolean(comparisonResult));
}

function* binaryExpressionAdd(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const leftCompletion = yield* EvaluateNodeCommand(node.left, context);
  if (leftCompletion.type === "throw") {
    return leftCompletion;
  }
  if (leftCompletion.type !== "normal" || !leftCompletion.value) {
    throw new Error(
      "Expected left completion to return a value, but got undefined",
    );
  }

  const left = leftCompletion.value;

  const rightCompletion = yield* EvaluateNodeCommand(node.right, context);
  if (rightCompletion.type === "throw") {
    return rightCompletion;
  }
  if (rightCompletion.type !== "normal" || !rightCompletion.value) {
    throw new Error(
      "Expected right completion to return a value, but got undefined",
    );
  }
  const right = rightCompletion.value;

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
  const leftCompletion = yield* EvaluateNodeCommand(node.left, context);
  if (leftCompletion.type === "throw") {
    return leftCompletion;
  }
  if (leftCompletion.type !== "normal" || !leftCompletion.value) {
    throw new Error(
      "Expected left completion to return a value, but got undefined",
    );
  }

  const left = leftCompletion.value;

  const rightCompletion = yield* EvaluateNodeCommand(node.right, context);
  if (rightCompletion.type === "throw") {
    return rightCompletion;
  }
  if (rightCompletion.type !== "normal" || !rightCompletion.value) {
    throw new Error(
      "Expected right completion to return a value, but got undefined",
    );
  }
  const right = rightCompletion.value;

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
  const leftCompletion = yield* EvaluateNodeCommand(node.left, context);
  if (leftCompletion.type === "throw") {
    return leftCompletion;
  }
  if (leftCompletion.type !== "normal" || !leftCompletion.value) {
    throw new Error(
      "Expected left completion to return a value, but got undefined",
    );
  }

  const left = leftCompletion.value;

  const rightCompletion = yield* EvaluateNodeCommand(node.right, context);
  if (rightCompletion.type === "throw") {
    return rightCompletion;
  }
  if (rightCompletion.type !== "normal" || !rightCompletion.value) {
    throw new Error(
      "Expected right completion to return a value, but got undefined",
    );
  }
  const right = rightCompletion.value;

  if (!isStaticJsObjectLike(right)) {
    // FIXME: Use real error.
    return ThrowCompletion(
      context.realm.types.string("Right side of in operator must be an object"),
    );
  }

  if (!isStaticJsString(left)) {
    // FIXME: Use real error.
    return ThrowCompletion(
      context.realm.types.string("Left side of in operator must be a string"),
    );
  }

  const hasProperty = yield* right.hasPropertyEvaluator(left.toString());
  return NormalCompletion(context.realm.types.boolean(hasProperty));
}
