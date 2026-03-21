import type { LabeledStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

export default function* labeledStatementNodeEvaluator(
  node: LabeledStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const label = node.label.name;

  // The spec passes this as explicit parameters to evaluators.
  // We really should switch over to that system some day...
  const oldLabelSet = context.labelSet;
  context.labelSet = [...context.labelSet, label];

  const completion = yield* EvaluateNodeCommand(node.body);
  context.labelSet = oldLabelSet;

  if (Completion.Break.is(completion) && completion.target === label) {
    return completion.value;
  }
  return yield* Q(completion);
}
