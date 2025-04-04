import { ThrowStatement } from "@babel/types";

import { ThrowCompletion } from "../completions/index.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* throwStatementNodeEvaluator(
  node: ThrowStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const valueCompletion = yield* EvaluateNodeCommand(node.argument, context);
  if (valueCompletion.type === "throw") {
    return valueCompletion;
  }
  if (valueCompletion.type !== "normal" || !valueCompletion.value) {
    throw new Error(
      `Expected throw statement argument to be normal completion, but got ${valueCompletion.type}`,
    );
  }

  const value = valueCompletion.value;
  return ThrowCompletion(value);
}
