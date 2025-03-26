import { ReturnStatement } from "@babel/types";

import { StaticJsValue, StaticJsUndefined } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { ReturnCompletion } from "../completions/index.js";

export default function* returnStatementNodeEvaluator(
  node: ReturnStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let value: StaticJsValue = StaticJsUndefined();
  if (node.argument) {
    value = yield* EvaluateNodeAssertValueCommand(node.argument, context);
  }

  return ReturnCompletion(value);
}
