import { ThrowStatement } from "@babel/types";

import { ThrowCompletion } from "../completions/index.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* throwStatementNodeEvaluator(
  node: ThrowStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(node.argument, context, {
    rethrow: true,
    forNormalValue: "ThrowStatement.argument",
  });
  return ThrowCompletion(value);
}
