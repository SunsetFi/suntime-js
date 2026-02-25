import type { Statement } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeForCompletion } from "../commands/EvaluateNodeCommand.js";

import updateEmpty from "../completions/update-empty.js";
import type { Completion } from "../completions/Completion.js";
import completionValue from "../completions/completion-value.js";
import rethrowCompletion from "../completions/rethrow-completion.js";
import isAbruptCompletion from "../completions/AbruptCompletion.js";

export default function* evaluateStatementList(
  statementList: Statement[],
  context: EvaluationContext,
): EvaluationGenerator {
  const result = yield* evaluateStatementListForCompletion(statementList, context);
  return rethrowCompletion(result);
}

evaluateStatementList.forCompletion = evaluateStatementListForCompletion;

function* evaluateStatementListForCompletion(
  statementList: Statement[],
  context: EvaluationContext,
): EvaluationGenerator<Completion> {
  let sl: Completion = null;

  for (const statement of statementList) {
    const s = yield* EvaluateNodeForCompletion(statement, context);

    // This will throw for AbruptCompletions, which is what we want.
    sl = updateEmpty.forCompletion(s, completionValue(sl));
    if (isAbruptCompletion(s)) {
      return sl;
    }
  }

  return sl;
}
