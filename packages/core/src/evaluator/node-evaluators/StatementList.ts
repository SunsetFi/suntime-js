import type { Statement } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import rethrowCompletion from "../completions/rethrow-completion.js";

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
    const s = yield* EvaluateNodeCommand(statement, context);

    // This will throw for AbruptCompletions, which is what we want.
    sl = Completion.updateEmpty(s, Completion.value(sl));
    if (Completion.Abrupt.is(s)) {
      return sl;
    }
  }

  return sl;
}
