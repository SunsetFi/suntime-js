import type { StringLiteral } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* stringLiteralNodeEvaluator(node: StringLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.string(node.value);
}
