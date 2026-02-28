import type { BreakStatement } from "@babel/types";

import { Completion } from "../completions/Completion.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* breakStatementNodeEvaluator(node: BreakStatement): EvaluationGenerator {
  throw Completion.Break(node.label ? node.label.name : null);
}
