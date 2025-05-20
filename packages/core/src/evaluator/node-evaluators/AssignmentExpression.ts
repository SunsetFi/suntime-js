import { AssignmentExpression } from "@babel/types";

import { isStaticJsScalar } from "../../runtime/types/interfaces/StaticJsScalar.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { NormalCompletion, ThrowCompletion } from "../completions/index.js";

import setLVal from "./LVal.js";

export default function* assignmentExpressionNodeEvaluator(
  node: AssignmentExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { left, right } = node;

  let value = yield* EvaluateNodeCommand(right, context, {
    rethrow: true,
    forNormalValue: "AssignmentExpression.right",
  });

  if (left.type === "OptionalMemberExpression") {
    // Throw the same error typescript throws.
    return ThrowCompletion(
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
        if (left.type !== "Identifier") {
          return ThrowCompletion(
            context.realm.types.error(
              "SyntaxError",
              "Invalid left-hand side in assignment",
            ),
          );
        }

        const leftValue = yield* context.env.getBindingValueEvaluator(
          left.name,
          true,
        );

        if (!isStaticJsScalar(leftValue) || !isStaticJsScalar(value)) {
          // One will become a string so both become a string.
          value = context.realm.types.string(
            leftValue.toString() + value.toString(),
          );
        } else {
          // Use numbers
          value = context.realm.types.number(
            leftValue.toNumber() + value.toNumber(),
          );
        }
      }
      break;
    case "-=":
      {
        if (left.type !== "Identifier") {
          return ThrowCompletion(
            context.realm.types.error(
              "SyntaxError",
              "Invalid left-hand side in assignment",
            ),
          );
        }

        const leftValue = yield* context.env.getBindingValueEvaluator(
          left.name,
          true,
        );

        value = context.realm.types.number(
          leftValue.toNumber() - value.toNumber(),
        );
      }
      break;
    case "<<=":
      {
        if (left.type !== "Identifier") {
          return ThrowCompletion(
            context.realm.types.error(
              "SyntaxError",
              "Invalid left-hand side in assignment",
            ),
          );
        }

        const leftValue = yield* context.env.getBindingValueEvaluator(
          left.name,
          true,
        );

        value = context.realm.types.number(
          leftValue.toNumber() << value.toNumber(),
        );
      }
      break;
    case ">>=":
      {
        if (left.type !== "Identifier") {
          return ThrowCompletion(
            context.realm.types.error(
              "SyntaxError",
              "Invalid left-hand side in assignment",
            ),
          );
        }

        const leftValue = yield* context.env.getBindingValueEvaluator(
          left.name,
          true,
        );

        value = context.realm.types.number(
          leftValue.toNumber() >> value.toNumber(),
        );
      }
      break;
    case ">>>=":
      {
        if (left.type !== "Identifier") {
          return ThrowCompletion(
            context.realm.types.error(
              "SyntaxError",
              "Invalid left-hand side in assignment",
            ),
          );
        }

        const leftValue = yield* context.env.getBindingValueEvaluator(
          left.name,
          true,
        );

        value = context.realm.types.number(
          leftValue.toNumber() >>> value.toNumber(),
        );
      }
      break;
  }

  const setResult = yield* setLVal(
    left,
    value,
    context,
    function* (name, value) {
      yield* context.env.setMutableBindingEvaluator(
        name,
        value,
        context.realm.strict,
      );
    },
  );
  if (setResult.type === "throw") {
    return setResult;
  }

  // Pass the value for chaining.
  // It is proper to pass the resolved value, even if the binding set didn't change the value.
  return NormalCompletion(value);
}
