import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface NodeExitCommand extends EvaluatorCommandBase {
  command: "exit-node";
}

export function* NodeExitCommand(): EvaluationGenerator<void> {
  yield {
    command: "exit-node",
  };
}
