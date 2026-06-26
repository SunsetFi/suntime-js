import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface FunctionEnterCommand extends EvaluatorCommandBase {
  command: "function-enter";
  func: StaticJsFunction;
}

export function* FunctionEnterCommand(func: StaticJsFunction): EvaluationGenerator<void> {
  const command: FunctionEnterCommand = {
    command: "function-enter",
    func,
  };
  yield command;
}
