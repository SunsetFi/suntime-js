import type { ConditionalExpression } from "@babel/types";

import { toBoolean } from "../../runtime/algorithms/to-boolean.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* conditionalExpressionNodeEvaluator(
  node: ConditionalExpression,
): EvaluationGenerator {
  const testResult = yield* Q.val(EvaluateNodeCommand(node.test));

  const condition = yield* toBoolean.js(testResult);

  if (condition) {
    return yield* Q(EvaluateNodeCommand(node.consequent));
  } else {
    return yield* Q(EvaluateNodeCommand(node.alternate));
  }
}
