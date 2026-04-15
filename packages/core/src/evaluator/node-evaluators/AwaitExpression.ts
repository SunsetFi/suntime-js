import type { AwaitExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { AwaitCommand } from "../commands/AwaitCommand.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";

export default function* awaitExpressionNodeEvaluator(node: AwaitExpression): EvaluationGenerator {
  const awaitable = yield* Q.val(EvaluateNodeCommand(node.argument));

  const result = yield* AwaitCommand(awaitable);

  return result;
}
