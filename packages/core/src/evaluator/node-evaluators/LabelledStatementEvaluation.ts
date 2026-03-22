import type { Node } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type { NodeEvaluator } from "../NodeEvaluator.js";

import { Completion } from "../completions/Completion.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";
import rethrowCompletion from "../completions/rethrow-completion.js";

export default function labeledStatementEvaluation<TNode extends Node>(
  evaluator: NodeEvaluator<TNode>,
): NodeEvaluator<TNode> {
  // I swear I built this according to a spec entry, but I can't find it anymore.
  // There is lots of jank and guesses around breakable / label / break; / continue; statements and loops,
  // but the tests seem to pass.
  return function* labelledStatementEvaluationWrapper(node: TNode): EvaluationGenerator {
    const context = EvaluationContext.current;
    let stmtResult = yield* captureThrownCompletion(evaluator(node));

    if (Completion.Break.is(stmtResult)) {
      const selfLabel = context.labelSet.at(-1) ?? null;
      if (stmtResult.target === selfLabel) {
        stmtResult = stmtResult.value;
      }
    }

    return rethrowCompletion(stmtResult);
  };
}
