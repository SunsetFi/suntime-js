import type { WhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import { EvaluateNodeCommand, EvaluateNodeForCompletion } from "../commands/EvaluateNodeCommand.js";

import type { NormalCompletion } from "../completions/NormalCompletion.js";
import completionValue from "../completions/completion-value.js";
import updateEmpty from "../completions/update-empty.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";

const whileStatementNodeEvaluator = labeledStatementEvaluation(
  function* whileStatementNodeEvaluator(
    node: WhileStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let V: NormalCompletion = context.realm.types.undefined;
    while (true) {
      const exprValue = yield* EvaluateNodeCommand(node.test, context, {
        forNormalValue: "WhileStatement.test",
      });

      const shouldContinue = yield* toBoolean.js(exprValue, context.realm);
      if (!shouldContinue) {
        return V;
      }

      const stmtResult = yield* EvaluateNodeForCompletion(node.body, context);

      if (!loopContinues(stmtResult, context)) {
        return updateEmpty(stmtResult, V);
      }

      const stmtResultValue = completionValue(stmtResult);
      if (stmtResultValue) {
        V = stmtResultValue;
      }
    }
  },
);

export default typedMerge(whileStatementNodeEvaluator, {
  environmentSetup: false,
});
