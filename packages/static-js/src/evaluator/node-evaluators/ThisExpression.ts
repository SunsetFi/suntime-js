import { ThisExpression } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

export default function* thisExpressionNodeEvaluator(
  _node: ThisExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* context.env.getThisBindingEvaluator();
  return NormalCompletion(value);
}
