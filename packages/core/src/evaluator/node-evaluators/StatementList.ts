import type { Statement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* evaluateStatementList(
  statementList: Statement[],
): EvaluationGenerator<Completion> {
  let sl: Completion = null;

  for (const statement of statementList) {
    const s = yield* EvaluateNodeCommand(statement);

    // This will throw for AbruptCompletions, which is what we want.
    sl = Completion.updateEmpty(s, Completion.value(sl));
    if (Completion.Abrupt.is(s)) {
      return sl;
    }
  }

  return sl;
}
