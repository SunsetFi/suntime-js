import type { Node } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import type NodeEvaluator from "../NodeEvaluator.js";

import { BreakCompletion } from "../completions/BreakCompletion.js";
import captureCompletion from "../completions/capture-completion.js";
import rethrowCompletion from "../completions/rethrow-completion.js";

export default function labeledStatementEvaluation<TNode extends Node>(
  evaluator: NodeEvaluator<TNode>,
): NodeEvaluator<TNode> {
  return function* labelledStatementEvaluationWrapper(
    node: TNode,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let stmtResult = yield* captureCompletion(() => evaluator(node, context));
    if (stmtResult instanceof BreakCompletion) {
      if (stmtResult.target === null) {
        if (stmtResult.value === null) {
          stmtResult = context.realm.types.undefined;
        } else {
          stmtResult = stmtResult.value;
        }
      } else if (stmtResult.target === context.label) {
        stmtResult = stmtResult.value;
      }
    }

    return rethrowCompletion(stmtResult);
  };
}
