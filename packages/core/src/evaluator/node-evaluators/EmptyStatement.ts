import type { EmptyStatement } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* emptyStatementNodeEvaluator(
  _node: EmptyStatement,
): EvaluationGenerator {
  return null;
}
