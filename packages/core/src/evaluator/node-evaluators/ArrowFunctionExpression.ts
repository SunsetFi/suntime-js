import type { ArrowFunctionExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import createFunction from "./Function.js";

function* arrowFunctionExpressionNodeEvaluator(
  node: ArrowFunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const functionName = context.parameter("NamedEvaluation::name", String) ?? "";
  return createFunction(functionName, node, context);
}

export default arrowFunctionExpressionNodeEvaluator;
