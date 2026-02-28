import type { ThrowStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* throwStatementNodeEvaluator(
  node: ThrowStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(node.argument, context, {
    forNormalValue: "ThrowStatement.argument",
  });
  throw Completion.Throw(value);
}
