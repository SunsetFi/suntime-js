import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface ExitNodeCommand extends EvaluatorCommandBase {
  command: "exit-node";
}

export function* ExitNodeCommand(): EvaluationGenerator<void> {
  yield {
    command: "exit-node",
  };
}
