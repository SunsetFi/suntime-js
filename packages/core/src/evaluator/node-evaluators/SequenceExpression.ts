import type { SequenceExpression } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* sequenceExpressionNodeEvaluator(
  node: SequenceExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let lastCompletion: NormalCompletion = null;
  for (const expr of node.expressions) {
    lastCompletion = yield* EvaluateNodeCommand(expr, context);
  }

  return lastCompletion ?? context.realm.types.undefined;
}
