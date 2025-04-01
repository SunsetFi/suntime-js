import { ContinueStatement } from "@babel/types";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { ContinueCompletion } from "../completions/index.js";

export default function* continueStatementNodeEvaluator(
  node: ContinueStatement,
): EvaluationGenerator {
  return ContinueCompletion(node.label ? node.label.name : null);
}
