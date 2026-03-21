import type { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import type EvaluationContext from "../EvaluationContext.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

export default function* ifStatementNodeEvaluator(node: IfStatement, context: EvaluationContext) {
  const { realm } = context;
  const testResult = yield* Q.val(EvaluateNodeCommand(node.test), realm);
  const condition = yield* toBoolean.js(testResult, realm);

  let stmtCompletion: Completion;
  if (condition) {
    stmtCompletion = yield* EvaluateNodeCommand(node.consequent);
  } else if (node.alternate) {
    stmtCompletion = yield* EvaluateNodeCommand(node.alternate);
  } else {
    return context.realm.types.undefined;
  }

  return yield* Q(Completion.updateEmpty(stmtCompletion, realm.types.undefined));
}
