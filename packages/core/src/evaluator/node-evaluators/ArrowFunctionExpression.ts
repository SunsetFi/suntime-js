import { ArrowFunctionExpression } from "@babel/types";

import StaticJsAstArrowFunction from "../../runtime/types/implementation/StaticJsAstArrowFunction.js";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion } from "../completions/index.js";

function* arrowFunctionExpressionNodeEvaluator(
  node: ArrowFunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.async) {
    // TODO: Support these when the Promise primitive is in.
    throw new Error("Async functions are not supported");
  }

  if (node.generator) {
    // TODO: Support these when an Iterator primitive is in.
    throw new Error("Generator functions are not supported");
  }

  const func = new StaticJsAstArrowFunction(
    context.realm,
    // TODO: v8 uses the name of the variable the function is assigned to.
    "",
    node.params,
    context,
    node.body,
  );

  return NormalCompletion(func);
}

export default typedMerge(arrowFunctionExpressionNodeEvaluator, {
  environmentSetup: false,
});
