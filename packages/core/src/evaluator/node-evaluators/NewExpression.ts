import { NewExpression } from "@babel/types";

import { isStaticJsFunction, StaticJsValue } from "../../runtime/index.js";

import { NormalCompletion, ThrowCompletion } from "../completions/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";

export default function* newExpressionNodeEvaluator(
  node: NewExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const calleeCompletion = yield* EvaluateNodeCommand(node.callee, context);
  if (calleeCompletion.type === "throw") {
    return calleeCompletion;
  }
  if (calleeCompletion.type !== "normal" || !calleeCompletion.value) {
    throw new Error(
      "Expected callee completion to return a value, but got undefined",
    );
  }

  const callee = calleeCompletion.value;
  if (!isStaticJsFunction(callee)) {
    // FIXME: Use real error.
    return ThrowCompletion(context.realm.types.string("Not a function"));
  }

  const args = new Array<StaticJsValue>(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    const argCompletion = yield* EvaluateNodeCommand(
      node.arguments[i],
      context,
    );
    if (argCompletion.type === "throw") {
      return argCompletion;
    }
    if (argCompletion.type !== "normal" || !argCompletion.value) {
      throw new Error(
        `Expected argument completion to return a value, but got ${argCompletion.type}`,
      );
    }
    args[i] = argCompletion.value;
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
