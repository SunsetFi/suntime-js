import type { ForOfStatement, LVal, VariableDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import forInOfHeadEvaluation from "./ForInOfStatement/ForInOfHeadEvaluation.js";
import { forInOfBodyEvaluation } from "./ForInOfStatement/ForInOfBodyEvaluation.js";
import labeledStatementEvaluation from "./LabeledStatementEvaluation.js";

const forOfStatementNodeEvaluator = labeledStatementEvaluation(
  function* forOfStatementNodeEvaluator(
    node: ForOfStatement,
    context: EvaluationContext,
  ): EvaluationGenerator {
    const { await: isAsync, left, right, body } = node;

    if (left.type === "VariableDeclaration") {
      const keyResult = yield* forInOfHeadEvaluation(
        [],
        right,
        isAsync ? "async-iterate" : "iterate",
        context,
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
        context,
      );
    } else {
      const keyResult = yield* forInOfHeadEvaluation(
        [],
        right,
        isAsync ? "async-iterate" : "iterate",
        context,
      );
      return yield* forInOfBodyEvaluation(
        left,
        body,
        keyResult,
        "iterate",
        "assignment",
        isAsync ? "async" : "sync",
        context,
      );
    }
  },
);

export default typedMerge(forOfStatementNodeEvaluator, {
  environmentSetup: false,
});
