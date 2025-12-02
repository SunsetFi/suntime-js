import type { ArrowFunctionExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import StaticJsArrowFunction from "../../runtime/types/implementation/StaticJsArrowFunction.js";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsAsyncArrowFunction from "../../runtime/types/implementation/StaticJsAsyncArrowFunction.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import createFunction from "./Function.js";

function* arrowFunctionExpressionNodeEvaluator(
  node: ArrowFunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.generator) {
    // TODO: Support these when an Iterator primitive is in.
    throw new StaticJsEngineError("Generator functions are not supported");
  }

  // TODO: v8 uses the name of the variable the function is assigned to,
  // if this is assigned to a variable.
  const name = "";

  if (node.async) {
    return new StaticJsAsyncArrowFunction(
      context.realm,
      name,
      node.params,
      context,
      node.body,
      createFunction,
    );
  }

  const func = new StaticJsArrowFunction(
    context.realm,
    name,
    node.params,
    context,
    node.body,
    createFunction,
  );

  return func;
}

export default typedMerge(arrowFunctionExpressionNodeEvaluator, {
  environmentSetup: false,
});
