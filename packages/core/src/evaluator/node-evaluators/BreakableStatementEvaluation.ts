import type { Node } from "@babel/types";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type { NodeEvaluator } from "../NodeEvaluator.js";

import { Completion } from "../completions/Completion.js";
import { captureThrownCompletion } from "../completions/capture-thrown-completion.js";
import { rethrowCompletion } from "../completions/rethrow-completion.js";

import labeledStatementEvaluation from "./LabelledStatementEvaluation.js";

export default function breakableStatementEvaluation<TNode extends Node>(
  evaluator: NodeEvaluator<TNode>,
): NodeEvaluator<TNode> {
  return labeledStatementEvaluation(function* breakableStatementEvaluationWrapper(
    node: TNode,
  ): EvaluationGenerator {
    const context = EvaluationContext.current;
    let stmtResult = yield* captureThrownCompletion(evaluator(node));

    if (Completion.Break.is(stmtResult)) {
      if (stmtResult.target === null) {
        if (stmtResult.value === null) {
          stmtResult = context.realm.types.undefined;
        } else {
          stmtResult = stmtResult.value;
        }
      }
    }

    return rethrowCompletion(stmtResult);
  });
}
