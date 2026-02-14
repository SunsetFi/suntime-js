import type { AwaitExpression } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { AwaitCommand } from "../commands/AwaitCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* awaitExpressionNodeEvaluator(
  node: AwaitExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const awaitable = yield* EvaluateNodeCommand(node.argument, context, {
    forNormalValue: "await.argument",
  });

  const result = yield* AwaitCommand(awaitable);

  return result;
}
