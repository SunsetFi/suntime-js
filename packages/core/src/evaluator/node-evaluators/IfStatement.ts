import { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import { Completion, NormalCompletion } from "../completions/index.js";

export default function* ifStatementNodeEvaluator(
  node: IfStatement,
  context: EvaluationContext,
) {
  const testResultCompletion = yield* EvaluateNodeCommand(node.test, context);
  if (testResultCompletion.type === "throw") {
    return testResultCompletion;
  }
  if (testResultCompletion.type !== "normal" || !testResultCompletion.value) {
    throw new Error(
      `Expected test result to be normal completion, but got ${testResultCompletion.type}`,
    );
  }
  const testResult = testResultCompletion.value;

  let result: Completion = NormalCompletion(null);
  if (testResult.toBoolean()) {
    result = yield* EvaluateNodeCommand(node.consequent, context);
  } else if (node.alternate) {
    result = yield* EvaluateNodeCommand(node.alternate, context);
  }

  switch (result.type) {
    case "break":
    case "continue":
    case "return":
      return result;
  }

  return NormalCompletion(null);
}
