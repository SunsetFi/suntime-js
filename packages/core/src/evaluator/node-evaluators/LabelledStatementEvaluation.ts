import type { Node } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import type NodeEvaluator from "../NodeEvaluator.js";

import type { Completion } from "../completions/Completion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";
import { unwrapCompletion } from "../completions/unwrap-completion.js";
import { isAbruptCompletion } from "../completions/AbruptCompletion.js";

export default function labelledStatementEvaluation<TNode extends Node>(
  evaluator: NodeEvaluator<TNode>,
): NodeEvaluator<TNode> {
  return function* labelledStatementEvaluationWrapper(
    node: TNode,
    context: EvaluationContext,
  ): EvaluationGenerator {
    let stmtResult = yield* flattenEvaluation(() => evaluator(node, context));
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

    return unwrapCompletion(stmtResult);
  };
}

function* flattenEvaluation(
  evaluator: () => EvaluationGenerator,
): EvaluationGenerator<Completion> {
  try {
    return yield* evaluator();
  } catch (e) {
    if (isAbruptCompletion(e)) {
      return e;
    }

    throw e;
  }
}
