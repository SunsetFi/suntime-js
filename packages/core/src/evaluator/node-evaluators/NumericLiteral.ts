import type { NumericLiteral } from "@babel/types";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* numericLiteralNodeEvaluator(node: NumericLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.number(node.value);
}
