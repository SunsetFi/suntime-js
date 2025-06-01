import { ThisExpression } from "@babel/types";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* thisExpressionNodeEvaluator(
  _node: ThisExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* context.env.getThisBindingEvaluator();
  return NormalCompletion(value);
}
