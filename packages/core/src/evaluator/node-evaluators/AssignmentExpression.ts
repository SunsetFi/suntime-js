import type { AssignmentExpression } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import setLVal from "./LVal.js";
import toNumber from "../../runtime/algorithms/to-number.js";
import addition from "../../runtime/algorithms/addition.js";
import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";
import putValue from "../../runtime/algorithms/put-value.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export default function* assignmentExpressionNodeEvaluator(
  node: AssignmentExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { left, right } = node;

  let value = yield* EvaluateNodeCommand(right, context, {
    forNormalValue: "AssignmentExpression.right",
  });

  if (left.type === "OptionalMemberExpression") {
    // Throw the same error typescript throws.
    throw new ThrowCompletion(
      context.realm.types.error(
        "SyntaxError",
        "The left-hand side of an assignment expression cannot be an optional member expression.",
      ),
    );
  }

  switch (node.operator) {
    case "=":
      break;
    case "+=":
      {
        const leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        value = yield* addition(leftValue, value, context.realm);
      }
      break;
    case "-=":
      {
        let leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        leftValue = yield* toNumber(leftValue, context.realm);
        value = yield* toNumber(value, context.realm);

        value = context.realm.types.number(leftValue.value - value.value);
      }
      break;
    case "*=":
      {
        let leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        leftValue = yield* toNumber(leftValue, context.realm);
        value = yield* toNumber(value, context.realm);

        value = context.realm.types.number(leftValue.value * value.value);
      }
      break;
    case "/=":
      {
        let leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        leftValue = yield* toNumber(leftValue, context.realm);
        value = yield* toNumber(value, context.realm);

        value = context.realm.types.number(leftValue.value / value.value);
      }
      break;
    case "%=":
      {
        let leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        leftValue = yield* toNumber(leftValue, context.realm);
        value = yield* toNumber(value, context.realm);

        value = context.realm.types.number(leftValue.value % value.value);
      }
      break;
    case "<<=":
      {
        let leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        leftValue = yield* toNumber(leftValue, context.realm);
        value = yield* toNumber(value, context.realm);

        value = context.realm.types.number(leftValue.value << value.value);
      }
      break;
    case ">>=":
      {
        let leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        leftValue = yield* toNumber(leftValue, context.realm);
        value = yield* toNumber(value, context.realm);

        value = context.realm.types.number(leftValue.value >> value.value);
      }
      break;
    case ">>>=":
      {
        let leftValue = yield* EvaluateNodeCommand(left, context, {
          forNormalValue: "AssignmentExpression.left",
        });

        leftValue = yield* toNumber(leftValue, context.realm);
        value = yield* toNumber(value, context.realm);

        value = context.realm.types.number(leftValue.value >>> value.value);
      }
      break;
    default:
      throw new StaticJsEngineError(
        `Unsupported assignment operator: ${node.operator}`,
      );
  }

  yield* setLVal(left, value, context, function* (name, value) {
    // TODO: We should be getting ref from the expression directly.
    const ref = yield* getIdentifierReference(
      context.lexicalEnv,
      name,
      context.strict,
    );
    yield* putValue(ref, value, context.realm);
  });

  // Pass the value for chaining.
  // It is proper to pass the resolved value, even if the binding set didn't change the value.
  return value;
}
