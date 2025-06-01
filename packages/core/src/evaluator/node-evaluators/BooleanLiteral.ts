import { BooleanLiteral } from "@babel/types";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

export default function* booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return NormalCompletion(context.realm.types.boolean(node.value));
}
