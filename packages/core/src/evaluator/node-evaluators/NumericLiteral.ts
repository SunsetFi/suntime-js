import type { NumericLiteral } from "@babel/types";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

export default function* numericLiteralNodeEvaluator(
  node: NumericLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return context.realm.types.number(node.value);
}
