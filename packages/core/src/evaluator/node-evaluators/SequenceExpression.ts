import type { SequenceExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* sequenceExpressionNodeEvaluator(
  node: SequenceExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  let lastCompletion: StaticJsValue = realm.types.undefined;
  for (const expr of node.expressions) {
    // The comma operator calls GetValue on each of its operands.
    lastCompletion = yield* Q.val(EvaluateNodeCommand(expr));
  }

  return lastCompletion ?? realm.types.undefined;
}
