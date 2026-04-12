import type { ArrowFunctionExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import { EvaluationContext } from "../EvaluationContext.js";

import { createFunction } from "./Function.js";

function* arrowFunctionExpressionNodeEvaluator(node: ArrowFunctionExpression): EvaluationGenerator {
  const { lexicalEnv } = EvaluationContext.current;
  const func = createFunction(node, lexicalEnv);
  return func;
}

export default arrowFunctionExpressionNodeEvaluator;
