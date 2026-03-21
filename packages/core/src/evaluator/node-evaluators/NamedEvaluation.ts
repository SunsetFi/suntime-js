import type { Node } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* NamedEvaluation(
  name: string | null,
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator {
  return yield* context
    .with({
      evaluationParameters: {
        // Can be null
        "NamedEvaluation::name": name,
      },
    })
    .run(function* (context) {
      return yield* Q(EvaluateNodeCommand(node, context));
    });
}
