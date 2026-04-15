import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

import { type StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { Completion } from "../completions/Completion.js";
import { EvaluatorCommand } from "./EvaluatorCommand.js";

export interface YieldCommand extends EvaluatorCommandBase {
  command: "yield";
  value: StaticJsValue;
}
export function* YieldCommand(yieldValue: StaticJsValue): EvaluationGenerator<Completion> {
  let result: Completion;
  try {
    const resultValue = yield {
      command: "yield",
      value: yieldValue,
    };
    result = Completion.Normal(resultValue);
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      result = e;
    } else {
      throw e;
    }
  }

  return result;
}

YieldCommand.is = function (value: EvaluatorCommand): value is YieldCommand {
  return value.command === "yield";
};
