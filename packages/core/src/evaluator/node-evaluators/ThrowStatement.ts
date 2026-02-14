import type { ThrowStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* throwStatementNodeEvaluator(
  node: ThrowStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(node.argument, context, {
    forNormalValue: "ThrowStatement.argument",
  });
  throw new ThrowCompletion(value);
}
