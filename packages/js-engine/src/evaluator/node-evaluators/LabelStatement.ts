import { LabeledStatement } from "@babel/types";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/index.js";

export default function* labeledStatementNodeEvaluator(
  node: LabeledStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const label = node.label.name;
  return yield* EvaluateNodeCommand(node.body, context, { label });
}
