import type { BooleanLiteral } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluationContext } from "../EvaluationContext.js";

export default function* booleanLiteralNodeEvaluator(node: BooleanLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.boolean(node.value);
}
