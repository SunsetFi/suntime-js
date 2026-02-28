import type { DoWhileStatement } from "@babel/types";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import {
  EvaluateNodeCommand,
  EvaluateNodeForCompletion,
} from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";
import Q from "../completions/Q.js";

const doWhileStatementNodeEvaluator = labeledStatementEvaluation(
  function* doWhileStatementNodeEvaluator(
    node: DoWhileStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let V: Completion.Normal = context.realm.types.undefined;
    while (true) {
      const stmtResult = yield* EvaluateNodeForCompletion(node.body, context);
      if (!loopContinues(stmtResult, context)) {
        return yield* Q(Completion.updateEmpty(stmtResult, V));
      }

      const stmtValue = Completion.value(stmtResult);
      if (stmtValue) {
        V = stmtValue;
      }

      const exprValue = yield* EvaluateNodeCommand(node.test, context, {
        forNormalValue: "DoWhileStatement.test",
      });

      const exprBoolean = yield* toBoolean.js(exprValue, context.realm);
      if (!exprBoolean) {
        return V;
      }
    }
  },
);

export default doWhileStatementNodeEvaluator;
