import type { DoWhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import loopContinues from "../../runtime/algorithms/loop-continues.js";

import { EvaluateNodeCommand, EvaluateNodeForCompletion } from "../commands/EvaluateNodeCommand.js";

import type { NormalCompletion } from "../completions/NormalCompletion.js";
import rethrowCompletion from "../completions/rethrow-completion.js";
import completionValue from "../completions/completion-value.js";
import updateEmpty from "../completions/update-empty.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";

const doWhileStatementNodeEvaluator = labeledStatementEvaluation(
  function* doWhileStatementNodeEvaluator(
    node: DoWhileStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let V: NormalCompletion = context.realm.types.undefined;
    while (true) {
      const stmtResult = yield* EvaluateNodeForCompletion(node.body, context);
      if (!loopContinues(stmtResult, context)) {
        updateEmpty(stmtResult, V);
        return rethrowCompletion(stmtResult);
      }

      const stmtValue = completionValue(stmtResult);
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

export default typedMerge(doWhileStatementNodeEvaluator, {
  environmentSetup: false,
});
