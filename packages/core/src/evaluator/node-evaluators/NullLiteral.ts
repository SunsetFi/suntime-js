import type { NullLiteral } from "@babel/types";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

export default function* nullLiteralNodeEvaluator(
  _node: NullLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return context.realm.types.null;
}
