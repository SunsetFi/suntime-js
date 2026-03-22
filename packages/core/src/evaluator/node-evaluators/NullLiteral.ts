import type { NullLiteral } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* nullLiteralNodeEvaluator(_node: NullLiteral): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  return realm.types.null;
}
