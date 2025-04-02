import { NewExpression } from "@babel/types";

import { isStaticJsFunction, StaticJsValue } from "../../runtime/index.js";

import { NormalCompletion, ThrowCompletion } from "../completions/index.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* newExpressionNodeEvaluator(
  node: NewExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const callee = yield* EvaluateNodeAssertValueCommand(node.callee, context);
  if (!isStaticJsFunction(callee)) {
    // FIXME: Use real error.
    return ThrowCompletion(context.realm.types.string("Not a function"));
  }

  const args = new Array<StaticJsValue>(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    args[i] = yield* EvaluateNodeAssertValueCommand(node.arguments[i], context);
  }

  const result = yield* callee.construct(...args);
  switch (result.type) {
    // FIXME: WHich one should this return?
    case "normal":
    case "return":
      return NormalCompletion(result.value);
    case "throw":
      return result;
    default:
      throw new Error("Unexpected completion type " + result.type);
  }
}
