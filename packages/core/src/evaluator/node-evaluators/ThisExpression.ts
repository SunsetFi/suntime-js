import type { ThisExpression } from "@babel/types";

import getThisBinding from "../../runtime/environments/has-this-binding.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* thisExpressionNodeEvaluator(_node: ThisExpression): EvaluationGenerator {
  const { lexicalEnv } = EvaluationContext.current;
  return yield* getThisBinding(lexicalEnv);
}
