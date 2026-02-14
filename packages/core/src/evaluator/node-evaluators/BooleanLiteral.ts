import type { BooleanLiteral } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

export default function* booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return context.realm.types.boolean(node.value);
}
