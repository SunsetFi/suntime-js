import { Identifier } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* identifierNodeEvaluator(
  node: Identifier,
  context: EvaluationContext,
): EvaluationGenerator {
  return context.env.getBindingValue(node.name, context.realm.strict);
}
