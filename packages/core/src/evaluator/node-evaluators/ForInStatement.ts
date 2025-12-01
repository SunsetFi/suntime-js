import type { ForInStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import forInOfHeadEvaluation from "./ForInOfStatement/ForInOfHeadEvaluation.js";
import { forInOfBodyEvaluation } from "./ForInOfStatement/ForInOfBodyEvaluation.js";

function* forInStatementNodeEvaluator(
  node: ForInStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const { left, right, body } = node;

  if (left.type === "VariableDeclaration") {
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
      left.kind === "var" ? "varBinding" : "lexicalBinding",
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
      context,
    );
  }
}

export default typedMerge(forInStatementNodeEvaluator, {
  environmentSetup: false,
});
