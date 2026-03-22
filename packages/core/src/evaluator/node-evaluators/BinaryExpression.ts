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

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* binaryExpressionNodeEvaluator(
  node: BinaryExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;

  switch (node.operator) {
    case "+":
      return yield* binaryExpressionAdd(node);
    case "-":
      return yield* numericComputation((a, b) => a - b, node);
    case "*":
      return yield* numericComputation((a, b) => a * b, node);
    case "/":
      return yield* numericComputation((a, b) => a / b, node);
    case "%":
      return yield* numericComputation((a, b) => a % b, node);
    case "**":
      return yield* numericComputation((a, b) => a ** b, node);
    case "^":
      return yield* numericComputation((a, b) => a ^ b, node);
    case "<<":
      return yield* numericComputation((a, b) => a << b, node);
    case ">>":
      return yield* numericComputation((a, b) => a >> b, node);
    case "&":
      return yield* numericComputation((a, b) => a & b, node);
    case "|":
      return yield* numericComputation((a, b) => a | b, node);
    case "==":
      return yield* binaryExpressionDoubleEquals(node, false);
    case "!=":
      return yield* binaryExpressionDoubleEquals(node, true);
    case "===":
      return yield* binaryExpressionStrictEquals(node, false);
    case "!==":
      return yield* binaryExpressionStrictEquals(node, true);
    case "<": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left));
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right));
      const r = yield* isLessThan(lVal, rVal, true, realm);
      if (r === undefined) {
        return realm.types.false;
      }

      return realm.types.boolean(r);
    }
    case "<=": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left));
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right));
      const r = yield* isLessThan(rVal, lVal, false, realm);
      if (r || r === undefined) {
        return realm.types.false;
      }

      return realm.types.true;
    }
    case ">": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left));
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right));
      const r = yield* isLessThan(rVal, lVal, false, realm);
      if (r === undefined) {
        return realm.types.false;
      }

      return realm.types.boolean(r);
    }
    case ">=": {
      const lVal = yield* Q.val(EvaluateNodeCommand(node.left));
      const rVal = yield* Q.val(EvaluateNodeCommand(node.right));
      const r = yield* isLessThan(lVal, rVal, true, realm);
      if (r || r === undefined) {
        return realm.types.false;
      }

      return realm.types.true;
    }
    case ">>>":
      return yield* numericComputation((a, b) => a >>> b, node);
    case "in":
      return yield* inExpression(node);
    case "instanceof":
      return yield* instanceOfExpression(node);
    default:
      throw new StaticJsEngineError(`BinaryExpression operator ${node.operator} is not supported`);
  }
}

function* binaryExpressionDoubleEquals(
  node: BinaryExpression,
  negate: boolean,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const left = yield* Q.val(EvaluateNodeCommand(node.left));

  const right = yield* Q.val(EvaluateNodeCommand(node.right));

  const value = yield* isLooselyEqual(left, right, realm);

  if (negate) {
    return realm.types.boolean(!value.value);
  }

  return value;
}

function* binaryExpressionStrictEquals(
  node: BinaryExpression,
  negate: boolean,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const left = yield* Q.val(EvaluateNodeCommand(node.left));
  const right = yield* Q.val(EvaluateNodeCommand(node.right));

  const result = yield* strictEquality(left, right, realm);

  if (negate) {
    return realm.types.boolean(!result.value);
  }

  return result;
}

function* binaryExpressionAdd(node: BinaryExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const left = yield* Q.val(EvaluateNodeCommand(node.left));
  const right = yield* Q.val(EvaluateNodeCommand(node.right));

  return yield* addition(left, right, realm);
}

function* numericComputation(
  func: (left: number, right: number) => unknown,
  node: BinaryExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  let left = yield* Q.val(EvaluateNodeCommand(node.left));
  let right = yield* Q.val(EvaluateNodeCommand(node.right));

  left = yield* toNumber(left);
  right = yield* toNumber(right);

  return realm.types.toStaticJsValue(func(left.value, right.value));
}

function* inExpression(node: BinaryExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const left = yield* Q.val(EvaluateNodeCommand(node.left));
  const right = yield* Q.val(EvaluateNodeCommand(node.right));

  if (!isStaticJsObjectLike(right)) {
    throw Completion.Throw(
      realm.types.error("TypeError", "Right side of in operator must be an object"),
    );
  }
  const rightObj = yield* toObject(right);

  const propertyKey = yield* toPropertyKey(left);
  const hasProperty = yield* rightObj.hasPropertyEvaluator(propertyKey);
  return realm.types.boolean(hasProperty);
}

function* instanceOfExpression(node: BinaryExpression) {
  const { realm } = EvaluationContext.current;
  const left = yield* Q.val(EvaluateNodeCommand(node.left));
  const right = yield* Q.val(EvaluateNodeCommand(node.right));

  const result = yield* instanceOfOperator(left, right, realm);

  return realm.types.boolean(result);
}
