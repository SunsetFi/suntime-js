import { ReturnStatement } from "@babel/types";

import { StaticJsValue } from "../../runtime/types/interfaces/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ReturnCompletion } from "../completions/ReturnCompletion.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

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
