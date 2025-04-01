import { ArrowFunctionExpression } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion } from "../completions/index.js";

import createFunction from "./Function.js";

function* arrowFunctionExpressionNodeEvaluator(
  node: ArrowFunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  return NormalCompletion(createFunction(null, node, context));
}

export default typedMerge(arrowFunctionExpressionNodeEvaluator, {
  environmentSetup: () => false,
});
