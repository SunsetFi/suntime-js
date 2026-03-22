import type {
  AssignmentExpression,
  Expression,
  LVal,
  OptionalMemberExpression,
} from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsNull } from "../../runtime/types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";

import toNumber from "../../runtime/algorithms/to-number.js";
import addition from "../../runtime/algorithms/addition.js";
import putValue from "../../runtime/algorithms/put-value.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";
import getValue from "../../runtime/algorithms/get-value.js";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import destructuringAssignmentEvaluation from "../bindings/destructuring-assignment-evaluation.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

export default function* assignmentExpressionNodeEvaluator(
  node: AssignmentExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const { left, right } = node;
  switch (node.operator) {
    case "=":
      return yield* directAssignmentExpressionEvaluator(left, right);
    case "**=":
    case "*=":
    case "/=":
    case "%=":
    case "+=":
    case "-=":
    case "<<=":
    case ">>=":
    case ">>>=":
    case "&=":
    case "^=":
    case "|=":
      return yield* algebraicAssignmentExpressionEvaluator(node.operator, left, right);
    case "&&=": {
      const lRef = yield* Q.ref(EvaluateNodeCommand(left));
      const lVal = yield* getValue(lRef);
      const lBool = yield* toBoolean.js(lVal);
      if (!lBool) {
        return lVal;
      }

      const rVal = yield* Q.val(EvaluateNodeCommand(right));
      yield* putValue(lRef, rVal, realm);
      return rVal;
    }
    case "||=": {
      const lRef = yield* Q.ref(EvaluateNodeCommand(left));
      const lVal = yield* getValue(lRef);
      const lBool = yield* toBoolean.js(lVal);
      if (lBool) {
        return lVal;
      }

      const rVal = yield* Q.val(EvaluateNodeCommand(right));
      yield* putValue(lRef, rVal, realm);
      return rVal;
    }
    case "??=": {
      const lRef = yield* Q.ref(EvaluateNodeCommand(left));
      const lVal = yield* getValue(lRef);
      if (!isStaticJsNull(lVal) && !isStaticJsUndefined(lVal)) {
        return lVal;
      }

      const rVal = yield* Q.val(EvaluateNodeCommand(right));
      yield* putValue(lRef, rVal, realm);
      return rVal;
    }
  }

  throw new StaticJsEngineError(`Unsupported assignment operator: ${node.operator}`);
}

function* directAssignmentExpressionEvaluator(
  // FIXME: I don't think destructuringAssignmentEvaluation knows what OptionalMemberExpression is.
  left: LVal | OptionalMemberExpression,
  right: Expression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  if (left.type !== "ObjectPattern" && left.type !== "ArrayPattern") {
    const lRef = yield* Q.ref(EvaluateNodeCommand(left));
    const rVal = yield* Q.val(EvaluateNodeCommand(right));
    yield* putValue(lRef, rVal, realm);
    return rVal;
  }

  const rVal = yield* Q.val(EvaluateNodeCommand(right));

  yield* destructuringAssignmentEvaluation(left, rVal);

  return rVal;
}

function* algebraicAssignmentExpressionEvaluator(
  operator: string,
  left: LVal | OptionalMemberExpression,
  right: Expression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;

  const lRef = yield* Q.ref(EvaluateNodeCommand(left));

  const lVal = yield* getValue(lRef);

  const rVal = yield* Q.val(EvaluateNodeCommand(right));

  if (operator === "+=") {
    const result = yield* addition(lVal, rVal, realm);
    yield* putValue(lRef, result, realm);
    return result;
  }

  const l = yield* toNumber.js(lVal);
  const r = yield* toNumber.js(rVal);

  let result: number;
  switch (operator) {
    case "**=":
      result = l ** r;
      break;
    case "*=":
      result = l * r;
      break;
    case "/=":
      result = l / r;
      break;
    case "%=":
      result = l % r;
      break;
    case "-=":
      result = l - r;
      break;
    case "<<=":
      result = l << r;
      break;
    case ">>=":
      result = l >> r;
      break;
    case ">>>=":
      result = l >>> r;
      break;
    case "&=":
      result = l & r;
      break;
    case "^=":
      result = l ^ r;
      break;
    case "|=":
      result = l | r;
      break;
    default:
      throw new StaticJsEngineError(`Unsupported assignment operator: ${operator}`);
  }

  const resultVal = realm.types.number(result);
  yield* putValue(lRef, resultVal, realm);
  return resultVal;
}
