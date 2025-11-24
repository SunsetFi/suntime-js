import type { SwitchStatement } from "@babel/types";

import isStrictlyEqual from "../../runtime/algorithms/is-structly-equal.js";

import { BreakCompletion } from "../completions/BreakCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* switchStatementNodeEvaluator(
  statement: SwitchStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const selectorValue = yield* EvaluateNodeCommand(
    statement.discriminant,
    context,
    { forNormalValue: "SwitchStatement.discriminant" },
  );

  let matched = false;
  let lastCompletion: NormalCompletion = null;

  for (const switchCase of statement.cases) {
    if (!matched) {
      if (switchCase.test) {
        const caseValue = yield* EvaluateNodeCommand(switchCase.test, context, {
          forNormalValue: "SwitchStatement.case",
        });
        const isMatch = isStrictlyEqual(selectorValue, caseValue);
        if (isMatch) {
          matched = true;
        }
      } else {
        matched = true;
      }
    }

    if (matched) {
      for (const consequent of switchCase.consequent) {
        try {
          lastCompletion = yield* EvaluateNodeCommand(consequent, context);
        } catch (e) {
          if (BreakCompletion.isBreakForLabel(e, context.label)) {
            return lastCompletion;
          }
          throw e;
        }
      }
    }
  }

  return lastCompletion;
}
