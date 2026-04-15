import type { ThisExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import getThisBinding from "../../runtime/environments/has-this-binding.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* thisExpressionNodeEvaluator(_node: ThisExpression): EvaluationGenerator {
  const { lexicalEnv } = EvaluationContext.current;
  return yield* getThisBinding(lexicalEnv);
}
