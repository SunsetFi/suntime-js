import type { DoWhileStatement } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import labelledIterationStatementEvaluation from "./LabelledIterationStatementEvaluation.js";
import breakableStatementEvaluation from "./BreakableStatementEvaluation.js";

const doWhileStatementNodeEvaluator = breakableStatementEvaluation(
  labelledIterationStatementEvaluation(function* doWhileStatementNodeEvaluator(
    node: DoWhileStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let V: Completion.Normal = context.realm.types.undefined;

    const { labelSet } = context;

    while (true) {
      const stmtResult = yield* EvaluateNodeCommand(node.body, context);
      if (!loopContinues(stmtResult, labelSet)) {
        return yield* Q(Completion.updateEmpty(stmtResult, V));
      }

      const stmtValue = Completion.value(stmtResult);
      if (stmtValue) {
        V = stmtValue;
      }

      const exprValue = yield* Q.val(EvaluateNodeCommand(node.test, context), context.realm);

      const exprBoolean = yield* toBoolean.js(exprValue, context.realm);
      if (!exprBoolean) {
        return V;
      }
    }
  }),
);

export default doWhileStatementNodeEvaluator;
