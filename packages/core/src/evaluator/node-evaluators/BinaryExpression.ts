import type { BinaryExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsString } from "../../runtime/types/StaticJsString.js";

import strictEquality from "../../runtime/algorithms/strict-equality.js";
import isLooselyEqual from "../../runtime/algorithms/is-loosely-equal.js";
import toNumber from "../../runtime/algorithms/to-number.js";
import addition from "../../runtime/algorithms/addition.js";
import toObject from "../../runtime/algorithms/to-object.js";
import instanceOfOperator from "../../runtime/algorithms/instance-of-operator.js";
import isLessThan from "../../runtime/algorithms/is-less-than.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* binaryExpressionNodeEvaluator(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;

  switch (node.operator) {
    case "+":
      return yield* binaryExpressionAdd(node, context);
    case "-":
      return yield* numericComputation((a, b) => a - b, node, context);
    case "*":
      return yield* numericComputation((a, b) => a * b, node, context);
    case "/":
      return yield* numericComputation((a, b) => a / b, node, context);
    case "%":
      return yield* numericComputation((a, b) => a % b, node, context);
    case "**":
      return yield* numericComputation((a, b) => a ** b, node, context);
    case "^":
      return yield* numericComputation((a, b) => a ^ b, node, context);
    case "<<":
      return yield* numericComputation((a, b) => a << b, node, context);
    case ">>":
      return yield* numericComputation((a, b) => a >> b, node, context);
    case "&":
      return yield* numericComputation((a, b) => a & b, node, context);
    case "|":
      return yield* numericComputation((a, b) => a | b, node, context);
    case "==":
      return yield* binaryExpressionDoubleEquals(node, context, false);
    case "!=":
      return yield* binaryExpressionDoubleEquals(node, context, true);
    case "===":
      return yield* binaryExpressionStrictEquals(node, context, false);
    case "!==":
      return yield* binaryExpressionStrictEquals(node, context, true);
    case "<": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);
      const r = yield* isLessThan(lVal, rVal, true, realm);
      if (r === undefined) {
        return realm.types.false;
      }

      return realm.types.boolean(r);
    }
    case "<=": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);
      const r = yield* isLessThan(rVal, lVal, false, realm);
      if (r || r === undefined) {
        return realm.types.false;
      }

      return realm.types.true;
    }
    case ">": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);
      const r = yield* isLessThan(rVal, lVal, false, realm);
      if (r === undefined) {
        return realm.types.false;
      }

      return realm.types.boolean(r);
    }
    case ">=": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);
      const r = yield* isLessThan(lVal, rVal, true, realm);
      if (r || r === undefined) {
        return realm.types.false;
      }

      return realm.types.true;
    }
    case ">>>":
      return yield* numericComputation((a, b) => a >>> b, node, context);
    case "in":
      return yield* inExpression(node, context);
    case "instanceof":
      return yield* instanceOfExpression(node, context);
    default:
      throw new StaticJsEngineError(`BinaryExpression operator ${node.operator} is not supported`);
  }
}

function* binaryExpressionDoubleEquals(
  node: BinaryExpression,
  context: EvaluationContext,
  negate: boolean,
): EvaluationGenerator {
  const left = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);

  const right = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);

  const value = yield* isLooselyEqual(left, right, context.realm);

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
  const left = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);

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
  const left = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);

  return yield* addition(left, right, context.realm);
}

function* numericComputation(
  func: (left: number, right: number) => unknown,
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let left = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
  let right = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);

  left = yield* toNumber(left, context.realm);
  right = yield* toNumber(right, context.realm);

  return context.realm.types.toStaticJsValue(func(left.value, right.value));
}

function* inExpression(node: BinaryExpression, context: EvaluationContext): EvaluationGenerator {
  const left = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);

  const rightObj = yield* toObject(right, context.realm);

  if (!isStaticJsString(left)) {
    throw Completion.Throw(
      context.realm.types.error("TypeError", "Left side of in operator must be a string"),
    );
  }

  const hasProperty = yield* rightObj.hasPropertyEvaluator(left.toStringSync());
  return context.realm.types.boolean(hasProperty);
}

function* instanceOfExpression(node: BinaryExpression, context: EvaluationContext) {
  const left = yield* Q.val(EvaluateNodeCommand(node.left, context), context.realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right, context), context.realm);

  const result = yield* instanceOfOperator(left, right, context.realm);

  return context.realm.types.boolean(result);
}
