import { NewExpression } from "@babel/types";

import { isStaticJsFunction, StaticJsValue } from "../../runtime/index.js";

import { NormalCompletion, ThrowCompletion } from "../completions/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import StaticJsEngineError from "../StaticJsEngineError.js";

export default function* newExpressionNodeEvaluator(
  node: NewExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const callee = yield* EvaluateNodeCommand(node.callee, context, {
    rethrow: true,
    forNormalValue: "NewExpression.callee",
  });
  if (!isStaticJsFunction(callee)) {
    return ThrowCompletion(
      context.realm.types.error("TypeError", "Not a function"),
    );
  }

  const args = new Array<StaticJsValue>(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = yield* EvaluateNodeCommand(node.arguments[i], context, {
      rethrow: true,
      forNormalValue: `NewExpression.arguments[]`,
    });
    args[i] = arg;
  }

  const result = yield* callee.construct(...args);
  switch (result.type) {
    case "normal":
      return NormalCompletion(result.value);
    case "throw":
      return result;
    default:
      throw new StaticJsEngineError(
        "Unexpected completion type " + result.type,
      );
  }
}
