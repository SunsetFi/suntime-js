import type { ContinueStatement } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "../completions/Completion.js";

export default function* continueStatementNodeEvaluator(
  node: ContinueStatement,
): EvaluationGenerator {
  throw Completion.Continue(node.label ? node.label.name : null);
}
