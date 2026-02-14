import type { LabeledStatement } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

export default function* labeledStatementNodeEvaluator(
  node: LabeledStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const label = node.label.name;
  return yield* EvaluateNodeCommand(node.body, context, { label });
}
