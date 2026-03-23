import type { IfStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluationContext } from "../EvaluationContext.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

export default function* ifStatementNodeEvaluator(node: IfStatement) {
  const { realm } = EvaluationContext.current;
  const testResult = yield* Q.val(EvaluateNodeCommand(node.test));
  const condition = yield* toBoolean.js(testResult);

  let stmtCompletion: Completion;
  if (condition) {
    stmtCompletion = yield* EvaluateNodeCommand(node.consequent);
  } else if (node.alternate) {
    stmtCompletion = yield* EvaluateNodeCommand(node.alternate);
  } else {
    return realm.types.undefined;
  }

  return yield* Q(Completion.updateEmpty(stmtCompletion, realm.types.undefined));
}
