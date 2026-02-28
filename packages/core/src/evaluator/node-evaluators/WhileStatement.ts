import type { WhileStatement } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";
import Q from "../completions/Q.js";

const whileStatementNodeEvaluator = labeledStatementEvaluation(
  function* whileStatementNodeEvaluator(
    node: WhileStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let V: Completion.Normal = context.realm.types.undefined;
    while (true) {
      const exprValue = yield* Q.val(EvaluateNodeCommand(node.test, context), context.realm);

      const shouldContinue = yield* toBoolean.js(exprValue, context.realm);
      if (!shouldContinue) {
        return V;
      }

      const stmtResult = yield* EvaluateNodeCommand(node.body, context);

      if (!loopContinues(stmtResult, context)) {
        return yield* Q(Completion.updateEmpty(stmtResult, V));
      }

      const stmtResultValue = Completion.value(stmtResult);
      if (stmtResultValue) {
        V = stmtResultValue;
      }
    }
  },
);

export default whileStatementNodeEvaluator;
