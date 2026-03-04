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
  // Can we be more efficient here with no creating a new context?
  // Can we trust that all callers created a new context when needed?
  context = context.create({
    labelSet: [...context.labelSet, label],
  });
  return yield* Q(EvaluateNodeCommand(node.body, context));
}
