import { ReturnStatement } from "@babel/types";

import { StaticJsValue } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import { ReturnCompletion } from "../completions/index.js";

export default function* returnStatementNodeEvaluator(
  node: ReturnStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let value: StaticJsValue = context.realm.types.undefined;
  if (node.argument) {
    value = yield* EvaluateNodeCommand(node.argument, context, {
      rethrow: true,
      forNormalValue: "ReturnStatement.argument",
    });
  }

  return ReturnCompletion(value);
}
