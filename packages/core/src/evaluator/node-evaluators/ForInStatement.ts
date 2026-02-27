import type { ForInStatement, LVal, VariableDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationContext from "../EvaluationContext.js";

import forInOfHeadEvaluation from "./ForInOfStatement/ForInOfHeadEvaluation.js";
import { forInOfBodyEvaluation } from "./ForInOfStatement/ForInOfBodyEvaluation.js";
import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";

const forInStatementNodeEvaluator = labeledStatementEvaluation(
  function* forInStatementNodeEvaluator(node: ForInStatement, context: EvaluationContext) {
    const { left, right, body } = node;

    if (left.type === "VariableDeclaration") {
      const keyResult = yield* forInOfHeadEvaluation([], right, "enumerate", context);
      let lhs: VariableDeclaration | LVal = left;
      if (left.kind === "var") {
        const forBinding = left.declarations[0].id;
        if (forBinding.type === "VoidPattern") {
          // WHAT ARE THEEEESE!!!
          throw new StaticJsEngineError(`VoidPattern not supported in for-of statement LHS`);
        }
        lhs = forBinding;
      }
      return yield* forInOfBodyEvaluation(
        lhs,
        body,
        keyResult,
        "enumerate",
        left.kind === "var" ? "varBinding" : "lexicalBinding",
        "sync",
        context,
      );
    } else {
      const keyResult = yield* forInOfHeadEvaluation([], right, "enumerate", context);
      return yield* forInOfBodyEvaluation(
        left,
        body,
        keyResult,
        "enumerate",
        "assignment",
        "sync",
        context,
      );
    }
  },
);

export default typedMerge(forInStatementNodeEvaluator, {
  environmentSetup: false,
});
