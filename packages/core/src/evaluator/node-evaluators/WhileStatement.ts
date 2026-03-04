import type { WhileStatement } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import breakableStatementEvaluation from "./BreakableStatementEvaluation.js";

const whileStatementNodeEvaluator = breakableStatementEvaluation(
  function* whileStatementNodeEvaluator(
    node: WhileStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    const { labelSet } = context;
    context = context.create();

    let V: Completion.Normal = context.realm.types.undefined;

    while (true) {
      const exprValue = yield* Q.val(EvaluateNodeCommand(node.test, context), context.realm);

      const shouldContinue = yield* toBoolean.js(exprValue, context.realm);
      if (!shouldContinue) {
        return V;
      }

      const stmtResult = yield* EvaluateNodeCommand(node.body, context);

      if (!loopContinues(stmtResult, labelSet)) {
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
