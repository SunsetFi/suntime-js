import type { ForOfStatement, LVal, VariableDeclaration } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import boundNames from "../instantiation/algorithms/bound-names.js";
import breakableStatementEvaluation from "./BreakableStatementEvaluation.js";
import { forInOfBodyEvaluation } from "./ForInOfStatement/ForInOfBodyEvaluation.js";
import forInOfHeadEvaluation from "./ForInOfStatement/ForInOfHeadEvaluation.js";
import labelledIterationStatementEvaluation from "./LabelledIterationStatementEvaluation.js";

const forOfStatementNodeEvaluator = breakableStatementEvaluation(
  labelledIterationStatementEvaluation(function* forOfStatementNodeEvaluator(
    node: ForOfStatement,
  ): EvaluationGenerator {
    const { await: isAsync, left, right, body } = node;

    if (left.type === "VariableDeclaration") {
      const uninitializedBoundNames = left.kind === "var" ? [] : boundNames(left);

      const keyResult = yield* forInOfHeadEvaluation(
        uninitializedBoundNames,
        right,
        isAsync ? "async-iterate" : "iterate",
      );
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
        "iterate",
        left.kind === "var" ? "varBinding" : "lexicalBinding",
        isAsync ? "async" : "sync",
      );
    } else {
      const keyResult = yield* forInOfHeadEvaluation(
        [],
        right,
        isAsync ? "async-iterate" : "iterate",
      );
      return yield* forInOfBodyEvaluation(
        left,
        body,
        keyResult,
        "iterate",
        "assignment",
        isAsync ? "async" : "sync",
      );
    }
  }),
);

export default forOfStatementNodeEvaluator;
