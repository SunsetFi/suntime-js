import type { ArrowFunctionExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import createFunction from "./Function.js";

function* arrowFunctionExpressionNodeEvaluator(
  node: ArrowFunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  // TODO: v8 uses the name of the variable the function is assigned to,
  // if this is assigned to a variable.
  const name = "";

  return createFunction(name, node, context);
}

export default arrowFunctionExpressionNodeEvaluator;
