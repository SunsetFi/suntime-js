import type { IfStatement } from "@babel/types";

import { EvaluateNodeCommand, EvaluateNodeForCompletion } from "../commands/EvaluateNodeCommand.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import type EvaluationContext from "../EvaluationContext.js";

import type { Completion } from "../completions/Completion.js";
import updateEmpty from "../completions/update-empty.js";

export default function* ifStatementNodeEvaluator(node: IfStatement, context: EvaluationContext) {
  const testResult = yield* EvaluateNodeCommand(node.test, context, {
    forNormalValue: "IfStatement.test",
  });
  const condition = yield* toBoolean.js(testResult, context.realm);

  let stmtCompletion: Completion;
  if (condition) {
    stmtCompletion = yield* EvaluateNodeForCompletion(node.consequent, context);
  } else if (node.alternate) {
    stmtCompletion = yield* EvaluateNodeForCompletion(node.alternate, context);
  } else {
    return context.realm.types.undefined;
  }

  return updateEmpty(stmtCompletion, context.realm.types.undefined);
}
