import type { StringLiteral } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluationContext } from "../EvaluationContext.js";

export default function* stringLiteralNodeEvaluator(node: StringLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.string(node.value);
}
