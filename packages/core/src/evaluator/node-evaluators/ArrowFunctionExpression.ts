import type { ArrowFunctionExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluationContext } from "../EvaluationContext.js";
import { createFunction } from "./Function.js";

function* arrowFunctionExpressionNodeEvaluator(node: ArrowFunctionExpression): EvaluationGenerator {
  const { lexicalEnv, privateEnv } = EvaluationContext.current;
  // This function has hacks just for us,
  // sice trying to import StaticJsAstFunction here causes
  // circular imports.
  // FIXME: Why?
  const func = createFunction(node, lexicalEnv, privateEnv);
  return func;
}

export default arrowFunctionExpressionNodeEvaluator;
