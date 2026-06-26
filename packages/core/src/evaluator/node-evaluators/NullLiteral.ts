import type { NullLiteral } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluationContext } from "../EvaluationContext.js";

export default function* nullLiteralNodeEvaluator(_node: NullLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.null;
}
