import type { ConditionalExpression } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* conditionalExpressionNodeEvaluator(
  node: ConditionalExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const testResult = yield* EvaluateNodeCommand(node.test, context, {
    forNormalValue: "ConditionalExpression.test",
  });

  const condition = yield* toBoolean.js(testResult, context.realm);

  if (condition) {
    return yield* EvaluateNodeCommand(node.consequent, context);
  } else {
    return yield* EvaluateNodeCommand(node.alternate, context);
  }
}
