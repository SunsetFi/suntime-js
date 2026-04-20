import type { ArrowFunctionExpression } from "@babel/types";

import { instantiateArrowFunctionExpression } from "../../runtime/algorithms/instantiate-arrow-function-expression.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { getNamedEvaluationParameter } from "./NamedEvaluation.js";

function* arrowFunctionExpressionNodeEvaluator(node: ArrowFunctionExpression): EvaluationGenerator {
  const { lexicalEnv, privateEnv } = EvaluationContext.current;
  const name = getNamedEvaluationParameter() ?? null;
  const func = instantiateArrowFunctionExpression(node, name, lexicalEnv, privateEnv);
  return func;
}

export default arrowFunctionExpressionNodeEvaluator;
