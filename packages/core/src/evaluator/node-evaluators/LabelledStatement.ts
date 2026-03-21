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

  // The spec passes this as explicit parameters to evaluators.
  // We really should switch over to that system some day...
  return yield* context
    .withProperties({ labelSet: [...context.labelSet, label] })
    .run(function* (context) {
      const completion = yield* EvaluateNodeCommand(node.body, context);
      if (Completion.Break.is(completion) && completion.target === label) {
        return completion.value;
      }

      return rethrowCompletion(completion);
    });
}
