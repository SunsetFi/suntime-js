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
  const { realm } = context;
  const testResult = yield* Q.val(EvaluateNodeCommand(node.test), realm);

  const condition = yield* toBoolean.js(testResult, realm);

  if (condition) {
    return yield* Q(EvaluateNodeCommand(node.consequent));
  } else {
    return yield* Q(EvaluateNodeCommand(node.alternate));
  }
}
