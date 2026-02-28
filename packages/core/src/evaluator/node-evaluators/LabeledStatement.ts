import type { LabeledStatement } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

export default function* labeledStatementNodeEvaluator(
  node: LabeledStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const label = node.label.name;
  return yield* Q(EvaluateNodeCommand(node.body, context, { label }));
}
