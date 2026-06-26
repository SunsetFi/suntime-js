import type { ThisExpression } from "@babel/types";

import getThisBinding from "#algorithms/get-this-binding.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluationContext } from "../EvaluationContext.js";

export default function* thisExpressionNodeEvaluator(_node: ThisExpression): EvaluationGenerator {
  const { lexicalEnv } = EvaluationContext.current;
  return yield* getThisBinding(lexicalEnv);
}
