import type { ArrowFunctionExpression } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import createFunction from "./Function.js";

function* arrowFunctionExpressionNodeEvaluator(node: ArrowFunctionExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const functionName = context.parameter("NamedEvaluation::name", String) ?? "";
  return createFunction(functionName, node, context.lexicalEnv);
}

export default arrowFunctionExpressionNodeEvaluator;
