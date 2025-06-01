import { ContinueStatement } from "@babel/types";

import { ContinueCompletion } from "../completions/ContinueCompletion.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* continueStatementNodeEvaluator(
  node: ContinueStatement,
): EvaluationGenerator {
  return ContinueCompletion(node.label ? node.label.name : null);
}
