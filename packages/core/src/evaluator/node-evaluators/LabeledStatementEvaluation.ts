import type { Node } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type { NodeEvaluator } from "../NodeEvaluator.js";

import { Completion } from "../completions/Completion.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";
import rethrowCompletion from "../completions/rethrow-completion.js";

export default function labeledStatementEvaluation<TNode extends Node>(
  evaluator: NodeEvaluator<TNode>,
): NodeEvaluator<TNode> {
  return function* labelledStatementEvaluationWrapper(
    node: TNode,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let stmtResult = yield* captureThrownCompletion(evaluator(node, context));

    if (Completion.Break.is(stmtResult)) {
      // Note: The following is BreakableStatement
      // and below is LabelledStatement.
      // Presumably, this should apply to BlockStatement and SwitchStatement separately.
      if (stmtResult.target === null) {
        if (stmtResult.value === null) {
          stmtResult = context.realm.types.undefined;
        } else {
          stmtResult = stmtResult.value;
        }
      } else {
        // The following is LabelledStatement
        // It explicitly checks for the current LabelledStatement label,
        // which means we have to get creative as we run downstream
        const selfLabel = context.labelSet.at(-1) ?? null;
        if (stmtResult.target === selfLabel) {
          stmtResult = stmtResult.value;
        }
      }
    }

    return rethrowCompletion(stmtResult);
  };
}
