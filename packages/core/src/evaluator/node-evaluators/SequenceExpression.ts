import type { SequenceExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* sequenceExpressionNodeEvaluator(
  node: SequenceExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let lastValue: StaticJsValue | null = null;
  for (const expr of node.expressions) {
    lastValue = yield* EvaluateNodeCommand(expr, context);
  }

  return lastValue ?? context.realm.types.undefined;
}
