import type { Node } from "@babel/types";

import { captureThrownCompletion } from "../completions/capture-thrown-completion.js";
import { Completion } from "../completions/Completion.js";
import { rethrowCompletion } from "../completions/rethrow-completion.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type { NodeEvaluator } from "../NodeEvaluator.js";

export default function labelledIterationStatementEvaluation<TNode extends Node>(
  evaluator: NodeEvaluator<TNode>,
): NodeEvaluator<TNode> {
  return function* labelledIterationStatementEvaluationWrapper(node: TNode): EvaluationGenerator {
    const context = EvaluationContext.current;
    let stmtResult = yield* captureThrownCompletion(evaluator(node));

    if (Completion.Break.is(stmtResult)) {
      if (!stmtResult.target) {
        if (stmtResult.value == null) {
          stmtResult = context.realm.types.undefined;
        } else {
          stmtResult = stmtResult.value;
        }
      }
    }

    return rethrowCompletion(stmtResult);
  };
}
