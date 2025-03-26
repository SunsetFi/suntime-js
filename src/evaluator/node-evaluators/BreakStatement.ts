import { BreakStatement } from "@babel/types";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { BreakCompletion } from "../completions/index.js";

export default function* breakStatementNodeEvaluator(
  node: BreakStatement,
): EvaluationGenerator {
  return BreakCompletion(node.label ? node.label.name : null);
}
