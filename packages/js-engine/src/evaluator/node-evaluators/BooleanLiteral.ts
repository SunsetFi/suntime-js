import { BooleanLiteral } from "@babel/types";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion } from "../completions/index.js";

export default function* booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return NormalCompletion(context.realm.types.boolean(node.value));
}
