import type { ForInStatement, LVal, VariableDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import typedMerge from "../../internal/typed-merge.js";

import { BreakCompletion } from "../completions/BreakCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import forInOfHeadEvaluation from "./ForInOfStatement/ForInOfHeadEvaluation.js";
import { forInOfBodyEvaluation } from "./ForInOfStatement/ForInOfBodyEvaluation.js";

function* forInStatementNodeEvaluator(
  node: ForInStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const { left, right, body } = node;

  try {
    if (left.type === "VariableDeclaration") {
      const keyResult = yield* forInOfHeadEvaluation(
        [],
        right,
        "enumerate",
        context,
      );
      let lhs: VariableDeclaration | LVal = left;
      if (left.kind === "var") {
        const forBinding = left.declarations[0].id;
        if (forBinding.type === "VoidPattern") {
          // WHAT ARE THEEEESE!!!
          throw new StaticJsEngineError(
            `VoidPattern not supported in for-of statement LHS`,
          );
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
      const keyResult = yield* forInOfHeadEvaluation(
        [],
        right,
        "enumerate",
        context,
      );
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
  } catch (e) {
    // Note: Officially, the spec wants forInOfBodyEvaluation to return a BreakCompletion that DOES have a value,
    // and for LabelledEvaluation to unwrap the value to a normal return.
    // We (currently) don't have values with our BreakCompletions, and the only time this is hit is when forInOfHeadEvaluation
    // encounters a null or undefined right-hand side, so we just return..
    if (BreakCompletion.isBreakForLabel(e, context.label)) {
      return null;
    }

    throw e;
  }
}

export default typedMerge(forInStatementNodeEvaluator, {
  environmentSetup: false,
});
