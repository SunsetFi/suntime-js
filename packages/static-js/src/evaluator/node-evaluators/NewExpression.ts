import { NewExpression } from "@babel/types";

import { isStaticJsFunction, StaticJsValue } from "../../runtime/index.js";

import { NormalCompletion } from "../completions/index.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* newExpressionNodeEvaluator(
  node: NewExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const callee = yield* EvaluateNodeAssertValueCommand(node.callee, context);
  if (!isStaticJsFunction(callee)) {
    throw new Error("Not a function");
  }

  const args = new Array<StaticJsValue>(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    args[i] = yield* EvaluateNodeAssertValueCommand(node.arguments[i], context);
  }

  const result = yield* callee.construct(...args);
  return NormalCompletion(result);
}
