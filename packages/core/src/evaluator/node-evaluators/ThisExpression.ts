import type { ThisExpression } from "@babel/types";

import getThisBinding from "../../runtime/environments/has-this-binding.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* thisExpressionNodeEvaluator(
  _node: ThisExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  return yield* getThisBinding(context.lexicalEnv);
}
