import type { NumericLiteral } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluationContext } from "../EvaluationContext.js";

export default function* numericLiteralNodeEvaluator(node: NumericLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.number(node.value);
}
