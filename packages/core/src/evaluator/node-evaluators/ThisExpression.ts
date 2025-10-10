import type { ThisExpression } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* thisExpressionNodeEvaluator(
  _node: ThisExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* context.lexicalEnv.getThisBindingEvaluator();
  return value;
}
