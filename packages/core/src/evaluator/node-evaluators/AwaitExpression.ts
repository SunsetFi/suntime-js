import type { AwaitExpression } from "@babel/types";

import { Await } from "#algorithms/await.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";

export default function* awaitExpressionNodeEvaluator(node: AwaitExpression): EvaluationGenerator {
  const awaitable = yield* Q.val(EvaluateNodeCommand(node.argument));

  return yield* Q(Await(awaitable));
}
