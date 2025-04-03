import { ThrowStatement } from "@babel/types";

import { ThrowCompletion } from "../completions/index.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* throwStatementNodeEvaluator(
  node: ThrowStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  return ThrowCompletion(
    yield* EvaluateNodeAssertValueCommand(node.argument, context),
  );
}
