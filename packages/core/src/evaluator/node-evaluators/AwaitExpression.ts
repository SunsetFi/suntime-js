import { type AwaitExpression } from "@babel/types";

import { Await } from "../../runtime/algorithms/await.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* awaitExpressionNodeEvaluator(node: AwaitExpression): EvaluationGenerator {
  const awaitable = yield* Q.val(EvaluateNodeCommand(node.argument));

  return yield* Q(Await(awaitable));
}
