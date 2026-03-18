import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";
import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

export interface FunctionEnterCommand extends EvaluatorCommandBase {
  command: "function-enter";
  func: StaticJsFunction;
}

export function* FunctionEnterCommand(func: StaticJsFunction): EvaluationGenerator<void> {
  yield {
    command: "function-enter",
    func,
  };
}
