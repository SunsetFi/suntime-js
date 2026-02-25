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

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import destructuringAssignmentEvaluation from "../bindings/destructuring-assignment-evaluation.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

export default function* assignmentExpressionNodeEvaluator(
  node: AssignmentExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { left, right } = node;
  switch (node.operator) {
    case "=":
      return yield* directAssignmentExpressionEvaluator(left, right, context);
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
      return yield* algebraicAssignmentExpressionEvaluator(node.operator, left, right, context);
    case "&&=": {
      const lRef = yield* EvaluateNodeCommand(left, context, {
        forReference: "AssignmentExpression.&&=.left",
      });
      const lVal = yield* getValue(lRef, context.realm);
      const lBool = yield* toBoolean.js(lVal, context.realm);
      if (!lBool) {
        return lVal;
      }

      const rVal = yield* EvaluateNodeCommand(right, context, {
        forNormalValue: "AssignmentExpression.&&=.right",
      });
      yield* putValue(lRef, rVal, context.realm);
      return rVal;
    }
    case "||=": {
      const lRef = yield* EvaluateNodeCommand(left, context, {
        forReference: "AssignmentExpression.||=.left",
      });
      const lVal = yield* getValue(lRef, context.realm);
      const lBool = yield* toBoolean.js(lVal, context.realm);
      if (lBool) {
        return lVal;
      }

      const rVal = yield* EvaluateNodeCommand(right, context, {
        forNormalValue: "AssignmentExpression.||=.right",
      });
      yield* putValue(lRef, rVal, context.realm);
      return rVal;
    }
    case "??=": {
      const lRef = yield* EvaluateNodeCommand(left, context, {
        forReference: "AssignmentExpression.??=.left",
      });
      const lVal = yield* getValue(lRef, context.realm);
      if (!isStaticJsNull(lVal) && !isStaticJsUndefined(lVal)) {
        return lVal;
      }

      const rVal = yield* EvaluateNodeCommand(right, context, {
        forNormalValue: "AssignmentExpression.??=.right",
      });
      yield* putValue(lRef, rVal, context.realm);
      return rVal;
    }
  }

  throw new StaticJsEngineError(`Unsupported assignment operator: ${node.operator}`);
}

function* directAssignmentExpressionEvaluator(
  // FIXME: I don't think destructuringAssignmentEvaluation knows what OptionalMemberExpression is.
  left: LVal | OptionalMemberExpression,
  right: Expression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (left.type !== "ObjectPattern" && left.type !== "ArrayPattern") {
    const lRef = yield* EvaluateNodeCommand(left, context, {
      forReference: "AssignmentExpression.=.left",
    });
    const rVal = yield* EvaluateNodeCommand(right, context, {
      forNormalValue: "AssignmentExpression.=.right",
    });
    yield* putValue(lRef, rVal, context.realm);
    return rVal;
  }

  const rVal = yield* EvaluateNodeCommand(right, context, {
    forNormalValue: "AssignmentExpression.=.right",
  });

  yield* destructuringAssignmentEvaluation(left, rVal, context);

  return rVal;
}

function* algebraicAssignmentExpressionEvaluator(
  operator: string,
  left: LVal | OptionalMemberExpression,
  right: Expression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;

  const lRef = yield* EvaluateNodeCommand(left, context, {
    forReference: `AssignmentExpression.${operator}.left`,
  });

  const lVal = yield* getValue(lRef, context.realm);

  const rVal = yield* EvaluateNodeCommand(right, context, {
    forNormalValue: `AssignmentExpression.${operator}.right`,
  });

  if (operator === "+=") {
    const result = yield* addition(lVal, rVal, context.realm);
    yield* putValue(lRef, result, context.realm);
    return result;
  }

  const l = yield* toNumber.js(lVal, realm);
  const r = yield* toNumber.js(rVal, realm);

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
