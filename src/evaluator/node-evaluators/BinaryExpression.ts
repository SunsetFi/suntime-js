import { BinaryExpression } from "@babel/types";

import {
  StaticJsEnvironment,
  StaticJsValue,
  StaticJsBoolean,
  StaticJsString,
  toStaticJsValue,
} from "../../environment/index.js";
import { staticJsInstanceOf } from "../../environment/types/StaticJsTypeSymbol.js";

import { evaluateNodeAssertValue } from "./evaluate-node.js";

export default function binaryExpressionNodeEvaluator(
  node: BinaryExpression,
  env: StaticJsEnvironment,
): StaticJsValue {
  switch (node.operator) {
    case "+":
      return binaryExpressionAdd(node, env);
    case "-":
      return numericComputation((a, b) => a - b, node, env);
    case "*":
      return numericComputation((a, b) => a * b, node, env);
    case "/":
      return numericComputation((a, b) => a / b, node, env);
    case "%":
      return numericComputation((a, b) => a % b, node, env);
    case "**":
      return numericComputation((a, b) => a ** b, node, env);
    case "^":
      return numericComputation((a, b) => a ^ b, node, env);
    case "<<":
      return numericComputation((a, b) => a << b, node, env);
    case ">>":
      return numericComputation((a, b) => a >> b, node, env);
    case "&":
      return numericComputation((a, b) => a & b, node, env);
    case "|":
      return numericComputation((a, b) => a | b, node, env);
    case "==":
      return binaryExpressionDoubleEquals(node, env, false);
    case "!=":
      return binaryExpressionDoubleEquals(node, env, true);
    case "===":
      return binaryExpressionTrippleEquals(node, env, false);
    case "!==":
      return binaryExpressionTrippleEquals(node, env, true);
    case "<":
      return numericComputation((a, b) => StaticJsBoolean(a < b), node, env);
    case "<=":
      return numericComputation((a, b) => StaticJsBoolean(a <= b), node, env);
    case ">":
      return numericComputation((a, b) => StaticJsBoolean(a > b), node, env);
    case ">=":
      return numericComputation((a, b) => StaticJsBoolean(a >= b), node, env);
    default:
      throw new Error(
        `BinaryExpression operator ${node.operator} is not supported`,
      );
  }
}

function binaryExpressionDoubleEquals(
  node: BinaryExpression,
  env: StaticJsEnvironment,
  negate: boolean,
): StaticJsBoolean {
  const left = evaluateNodeAssertValue(node.left, env);
  const right = evaluateNodeAssertValue(node.right, env);

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
  } else if (isPrimitiveStaticJsValue(left)) {
    leftValue = left.toJs();
  } else {
    // By reference.
    leftValue = left;
  }

  let rightValue: any;
  if (arithmatic) {
    // Coerce whatever it is to a number.
    rightValue = right.toNumber();
  } else if (isPrimitiveStaticJsValue(right)) {
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

function binaryExpressionTrippleEquals(
  node: BinaryExpression,
  env: StaticJsEnvironment,
  negate: boolean,
): StaticJsBoolean {
  const left = evaluateNodeAssertValue(node.left, env);
  const right = evaluateNodeAssertValue(node.right, env);

  if (staticJsInstanceOf(left) !== staticJsInstanceOf(right)) {
    return StaticJsBoolean(false);
  }

  if (isPrimitiveStaticJsValue(left)) {
    return StaticJsBoolean(
      negate ? left.toJs() !== right.toJs() : left.toJs() === right.toJs(),
    );
  }

  return StaticJsBoolean(negate ? left === right : left !== right);
}

function binaryExpressionAdd(
  node: BinaryExpression,
  env: StaticJsEnvironment,
): StaticJsValue {
  const left = evaluateNodeAssertValue(node.left, env);
  const right = evaluateNodeAssertValue(node.right, env);

  if (!isPrimitiveStaticJsValue(left) || !isPrimitiveStaticJsValue(right)) {
    // One will become a string so both become a string.
    return StaticJsString(left.toString() + right.toString());
  }

  // Fall back to the primitive addition.
  return toStaticJsValue(left.toJs() + right.toJs());
}

function numericComputation(
  func: (left: number, right: number) => any,
  node: BinaryExpression,
  env: StaticJsEnvironment,
): StaticJsValue {
  const left = evaluateNodeAssertValue(node.left, env);
  const right = evaluateNodeAssertValue(node.right, env);

  return toStaticJsValue(func(left.toNumber(), right.toNumber()));
}

function isPrimitiveStaticJsValue(value: StaticJsValue): boolean {
  return ["number", "string", "boolean", "null", "undefined"].includes(
    staticJsInstanceOf(value)!,
  );
}

function isStaticJsNullOrUndefined(value: StaticJsValue) {
  return ["null", "undefined"].includes(staticJsInstanceOf(value)!);
}
