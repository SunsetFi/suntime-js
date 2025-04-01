import { NullLiteral } from "@babel/types";

import { NormalCompletion } from "../completions/index.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

export default function* nullLiteralNodeEvaluator(
  _node: NullLiteral,
  context: EvaluationContext,
): EvaluationGenerator {
  return NormalCompletion(context.realm.types.null);
}
