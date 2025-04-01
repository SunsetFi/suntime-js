import { BinaryExpression } from "@babel/types";

import {
  StaticJsValue,
  isStaticJsScalar,
  isStaticJsObjectLike,
  isStaticJsString,
} from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

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
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

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
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

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
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

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
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

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
  const left = yield* EvaluateNodeAssertValueCommand(node.left, context);
  const right = yield* EvaluateNodeAssertValueCommand(node.right, context);

  if (!isStaticJsObjectLike(right)) {
    throw new Error("Right side of in operator must be an object");
  }

  if (!isStaticJsString(left)) {
    throw new Error("Left side of in operator must be a string");
  }

  const hasProperty = yield* right.hasPropertyEvaluator(left.toString());
  return NormalCompletion(context.realm.types.boolean(hasProperty));
}
