import { BreakStatement } from "@babel/types";

import { BreakCompletion } from "../completions/BreakCompletion.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* breakStatementNodeEvaluator(
  node: BreakStatement,
): EvaluationGenerator {
  return BreakCompletion(node.label ? node.label.name : null);
}
