import type { SequenceExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* sequenceExpressionNodeEvaluator(
  node: SequenceExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let lastCompletion: StaticJsValue = context.realm.types.undefined;
  for (const expr of node.expressions) {
    // The comma operator calls GetValue on each of its operands.
    lastCompletion = yield* Q.val(
      EvaluateNodeCommand(expr, context),
      context.realm,
    );
  }

  return lastCompletion ?? context.realm.types.undefined;
}
