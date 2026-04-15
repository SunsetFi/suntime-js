import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface FunctionExitCommand extends EvaluatorCommandBase {
  command: "function-exit";
}

export function* FunctionExitCommand(): EvaluationGenerator<void> {
  yield {
    command: "function-exit",
  };
}
