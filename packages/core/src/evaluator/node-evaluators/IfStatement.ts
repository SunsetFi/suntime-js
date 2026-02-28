import type { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import type EvaluationContext from "../EvaluationContext.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

export default function* ifStatementNodeEvaluator(node: IfStatement, context: EvaluationContext) {
  const testResult = yield* Q.val(EvaluateNodeCommand(node.test, context), context.realm);
  const condition = yield* toBoolean.js(testResult, context.realm);

  let stmtCompletion: Completion;
  if (condition) {
    stmtCompletion = yield* EvaluateNodeCommand(node.consequent, context);
  } else if (node.alternate) {
    stmtCompletion = yield* EvaluateNodeCommand(node.alternate, context);
  } else {
    return context.realm.types.undefined;
  }

  return yield* Q(Completion.updateEmpty(stmtCompletion, context.realm.types.undefined));
}
