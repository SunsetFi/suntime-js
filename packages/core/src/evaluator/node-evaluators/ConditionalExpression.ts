import type { ConditionalExpression } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* conditionalExpressionNodeEvaluator(
  node: ConditionalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let testResult = yield* EvaluateNodeCommand(node.test, context, {
    forNormalValue: "ConditionalExpression.test",
  });
  testResult = yield* toBoolean(testResult, context.realm);

  if (testResult.value) {
    return yield* EvaluateNodeCommand(node.consequent, context);
  } else {
    return yield* EvaluateNodeCommand(node.alternate, context);
  }
}
