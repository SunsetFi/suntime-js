import { NumericLiteral } from "@babel/types";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";
import EvaluationContext from "../EvaluationContext.js";

export default function* numericLiteralNodeEvaluator(
  node: NumericLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return NormalCompletion(context.realm.types.number(node.value));
}
