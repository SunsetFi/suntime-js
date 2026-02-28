import type { ConditionalExpression } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* conditionalExpressionNodeEvaluator(
  node: ConditionalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const testResult = yield* Q.val(EvaluateNodeCommand(node.test, context), context.realm);

  const condition = yield* toBoolean.js(testResult, context.realm);

  if (condition) {
    return yield* Q(EvaluateNodeCommand(node.consequent, context));
  } else {
    return yield* Q(EvaluateNodeCommand(node.alternate, context));
  }
}
