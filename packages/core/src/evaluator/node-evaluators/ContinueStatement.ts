import type { ContinueStatement } from "@babel/types";

import { ContinueCompletion } from "../completions/ContinueCompletion.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* continueStatementNodeEvaluator(
  node: ContinueStatement,
): EvaluationGenerator {
  throw new ContinueCompletion(node.label ? node.label.name : null);
}
