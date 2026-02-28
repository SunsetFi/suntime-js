import type { ContinueStatement } from "@babel/types";

import { Completion } from "../completions/Completion.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* continueStatementNodeEvaluator(
  node: ContinueStatement,
): EvaluationGenerator {
  throw Completion.Continue(node.label ? node.label.name : null);
}
