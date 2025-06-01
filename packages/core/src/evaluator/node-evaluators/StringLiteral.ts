import type { StringLiteral } from "@babel/types";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

export default function* stringLiteralNodeEvaluator(
  node: StringLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return context.realm.types.string(node.value);
}
