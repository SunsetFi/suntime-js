import type { WhileStatement } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import labelledIterationStatementEvaluation from "./LabelledIterationStatementEvaluation.js";
import breakableStatementEvaluation from "./BreakableStatementEvaluation.js";

const whileStatementNodeEvaluator = breakableStatementEvaluation(
  labelledIterationStatementEvaluation(function* whileStatementNodeEvaluator(
    node: WhileStatement,
  ): EvaluationGenerator {
    const { realm, labelSet } = EvaluationContext.current;

    let V: Completion.Normal = realm.types.undefined;

    while (true) {
      const exprValue = yield* Q.val(EvaluateNodeCommand(node.test));

      const shouldContinue = yield* toBoolean.js(exprValue);
      if (!shouldContinue) {
        return V;
      }

      const stmtResult = yield* EvaluateNodeCommand(node.body);

      if (!loopContinues(stmtResult, labelSet)) {
        return yield* Q(Completion.updateEmpty(stmtResult, V));
      }

      const stmtResultValue = Completion.value(stmtResult);
      if (stmtResultValue) {
        V = stmtResultValue;
      }
    }
  }),
);

export default whileStatementNodeEvaluator;
