import type { BooleanLiteral } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* booleanLiteralNodeEvaluator(node: BooleanLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.boolean(node.value);
}
