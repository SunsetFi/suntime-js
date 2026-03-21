import type { BinaryExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";

import toPropertyKey from "../../runtime/utils/to-property-key.js";

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
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left), realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right), realm);
      const r = yield* isLessThan(lVal, rVal, true, realm);
      if (r === undefined) {
        return realm.types.false;
      }

      return realm.types.boolean(r);
    }
    case "<=": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left), realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right), realm);
      const r = yield* isLessThan(rVal, lVal, false, realm);
      if (r || r === undefined) {
        return realm.types.false;
      }

      return realm.types.true;
    }
    case ">": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left), realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right), realm);
      const r = yield* isLessThan(rVal, lVal, false, realm);
      if (r === undefined) {
        return realm.types.false;
      }

      return realm.types.boolean(r);
    }
    case ">=": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left), realm);
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right), realm);
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
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);

  const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

  const value = yield* isLooselyEqual(left, right, realm);

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
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

  const result = yield* strictEquality(left, right, realm);

  if (negate) {
    return context.realm.types.boolean(!result.value);
  }

  return result;
}

function* binaryExpressionAdd(
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

  return yield* addition(left, right, realm);
}

function* numericComputation(
  func: (left: number, right: number) => unknown,
  node: BinaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  let left = yield* Q.val(EvaluateNodeCommand(node.left), realm);
  let right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

  left = yield* toNumber(left, realm);
  right = yield* toNumber(right, realm);

  return context.realm.types.toStaticJsValue(func(left.value, right.value));
}

function* inExpression(node: BinaryExpression, context: EvaluationContext): EvaluationGenerator {
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

  if (!isStaticJsObjectLike(right)) {
    throw Completion.Throw(
      context.realm.types.error("TypeError", "Right side of in operator must be an object"),
    );
  }
  const rightObj = yield* toObject(right, realm);

  const propertyKey = yield* toPropertyKey(left, realm);
  const hasProperty = yield* rightObj.hasPropertyEvaluator(propertyKey);
  return context.realm.types.boolean(hasProperty);
}

function* instanceOfExpression(node: BinaryExpression, context: EvaluationContext) {
  const { realm } = context;
  const left = yield* Q.val(EvaluateNodeCommand(node.left), realm);
  const right = yield* Q.val(EvaluateNodeCommand(node.right), realm);

  const result = yield* instanceOfOperator(left, right, realm);

  return context.realm.types.boolean(result);
}
