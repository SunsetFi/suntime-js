import type { AwaitExpression } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";
import { AwaitCommand } from "../commands/AwaitCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* awaitExpressionNodeEvaluator(
  node: AwaitExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const awaitable = yield* Q.val(EvaluateNodeCommand(node.argument, context), context.realm);

  const result = yield* AwaitCommand(awaitable);

  return result;
}
