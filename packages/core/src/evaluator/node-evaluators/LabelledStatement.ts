import type { LabeledStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
import rethrowCompletion from "../completions/rethrow-completion.js";

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

  const completion = yield* EvaluateNodeCommand(node.body, context);
  if (Completion.Break.is(completion) && completion.target === label) {
    return completion.value;
  }

  return rethrowCompletion(completion);
}
