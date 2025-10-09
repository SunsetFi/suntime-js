import type { ArrowFunctionExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import StaticJsArrowFunction from "../../runtime/types/implementation/StaticJsArrowFunction.js";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

function* arrowFunctionExpressionNodeEvaluator(
  node: ArrowFunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.async) {
    // TODO: Support these when the Promise primitive is in.
    throw new StaticJsEngineError("Async functions are not supported");
  }

  if (node.generator) {
    // TODO: Support these when an Iterator primitive is in.
    throw new StaticJsEngineError("Generator functions are not supported");
  }

  const func = new StaticJsArrowFunction(
    context.realm,
    // TODO: v8 uses the name of the variable the function is assigned to,
    // if this is assigned to a variable.
    "",
    node.params,
    context,
    node.body,
  );

  return func;
}

export default typedMerge(arrowFunctionExpressionNodeEvaluator, {
  environmentSetup: false,
});
