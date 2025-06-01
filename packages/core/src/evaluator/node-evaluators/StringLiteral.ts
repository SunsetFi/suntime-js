import { StringLiteral } from "@babel/types";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

export default function* stringLiteralNodeEvaluator(
  node: StringLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return NormalCompletion(context.realm.types.string(node.value));
}
