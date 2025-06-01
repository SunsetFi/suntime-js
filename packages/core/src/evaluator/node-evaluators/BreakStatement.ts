import type { BreakStatement } from "@babel/types";

import { BreakCompletion } from "../completions/BreakCompletion.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* breakStatementNodeEvaluator(
  node: BreakStatement,
): EvaluationGenerator {
  throw new BreakCompletion(node.label ? node.label.name : null);
}
