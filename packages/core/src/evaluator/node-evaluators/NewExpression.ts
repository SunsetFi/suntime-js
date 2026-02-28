import type { NewExpression } from "@babel/types";

import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* newExpressionNodeEvaluator(
  node: NewExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const callee = yield* EvaluateNodeCommand(node.callee, context, {
    forNormalValue: "NewExpression.callee",
  });
  if (!isStaticJsFunction(callee)) {
    throw Completion.Throw(
      context.realm.types.error("TypeError", "Not a function"),
    );
  }

  const args = new Array<StaticJsValue>(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = yield* EvaluateNodeCommand(node.arguments[i], context, {
      forNormalValue: `NewExpression.arguments[]`,
    });
    args[i] = arg;
  }

  return yield* callee.constructEvaluator(args);
}
