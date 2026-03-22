import type { ForInStatement, LVal, VariableDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import boundNames from "../instantiation/algorithms/bound-names.js";

import forInOfHeadEvaluation from "./ForInOfStatement/ForInOfHeadEvaluation.js";
import { forInOfBodyEvaluation } from "./ForInOfStatement/ForInOfBodyEvaluation.js";

import labelledIterationStatementEvaluation from "./LabelledIterationStatementEvaluation.js";
import breakableStatementEvaluation from "./BreakableStatementEvaluation.js";

const forInStatementNodeEvaluator = breakableStatementEvaluation(
  labelledIterationStatementEvaluation(function* forInStatementNodeEvaluator(node: ForInStatement) {
    const { left, right, body } = node;

    if (left.type === "VariableDeclaration") {
      const uninitializedBoundNames = left.kind === "var" ? [] : boundNames(left);

      const keyResult = yield* forInOfHeadEvaluation(uninitializedBoundNames, right, "enumerate");

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
      );
    } else {
      const keyResult = yield* forInOfHeadEvaluation([], right, "enumerate");
      return yield* forInOfBodyEvaluation(left, body, keyResult, "enumerate", "assignment", "sync");
    }
  }),
);

export default forInStatementNodeEvaluator;
