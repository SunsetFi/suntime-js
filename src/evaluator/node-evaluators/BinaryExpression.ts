import { BinaryExpression } from "@babel/types";

import {
  StaticJsValue,
  StaticJsBoolean,
  StaticJsString,
  isStaticJsScalar,
  isStaticJsObjectLike,
  isStaticJsString,
} from "../../runtime/index.js";
import { staticJsInstanceOf } from "../../runtime/primitives/StaticJsTypeSymbol.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";

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
      return numericComputation(
        (a, b) => StaticJsBoolean(a < b),
        node,
        context,
      );
    case "<=":
      return numericComputation(
        (a, b) => StaticJsBoolean(a <= b),
        node,
        context,
      );
    case ">":
      return numericComputation(
        (a, b) => StaticJsBoolean(a > b),
        node,
        context,
      );
    case ">=":
      return numericComputation(
        (a, b) => StaticJsBoolean(a >= b),
        node,
        context,
      );
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
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

  const leftType = staticJsInstanceOf(left);
  const rightType = staticJsInstanceOf(right);
  const arithmatic =
    !isStaticJsNullOrUndefined(left) &&
    !isStaticJsNullOrUndefined(right) &&
    (leftType === "number" || rightType === "number");

  let leftValue: any;
  if (arithmatic) {
    // Coerce whatever it is to a number.
    leftValue = left.toNumber();
  } else if (isStaticJsScalar(left)) {
    leftValue = left.toJs();
  } else {
    // By reference.
    leftValue = left;
  }

  let rightValue: any;
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
  return StaticJsBoolean(
    negate ? leftValue != rightValue : leftValue == rightValue,
  );
}

function* binaryExpressionTrippleEquals(
  node: BinaryExpression,
  context: EvaluationContext,
  negate: boolean,
): EvaluationGenerator {
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

  if (staticJsInstanceOf(left) !== staticJsInstanceOf(right)) {
    return StaticJsBoolean(false);
  }

  if (isStaticJsScalar(left)) {
    return StaticJsBoolean(
      negate ? left.toJs() !== right.toJs() : left.toJs() === right.toJs(),
    );
  }

  return StaticJsBoolean(negate ? left === right : left !== right);
}

function* binaryExpressionAdd(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

  if (!isStaticJsScalar(left) || !isStaticJsScalar(right)) {
    // One will become a string so both become a string.
    return StaticJsString(left.toString() + right.toString());
  }

  // Fall back to the primitive addition.
  return StaticJsValue(left.toJs() + right.toJs());
}

function* numericComputation(
  func: (left: number, right: number) => any,
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

  return StaticJsValue(func(left.toNumber(), right.toNumber()));
}

function isStaticJsNullOrUndefined(value: StaticJsValue) {
  return ["null", "undefined"].includes(staticJsInstanceOf(value)!);
}

function* inOperator(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

  if (!isStaticJsObjectLike(right)) {
    throw new Error("Right side of in operator must be an object");
  }

  if (!isStaticJsString(left)) {
    throw new Error("Left side of in operator must be a string");
  }

  return StaticJsBoolean(right.hasProperty(left.toString()));
}
