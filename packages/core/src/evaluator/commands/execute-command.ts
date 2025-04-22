import { executeEvaluateNodeCommand } from "./EvaluateNodeCommand.js";

import { EvaluatorCommand } from "./index.js";

export default function executeEvaluatorCommand(command: EvaluatorCommand) {
  switch (command.kind) {
    case "evalute-node":
      return executeEvaluateNodeCommand(command);
    default: {
      const kind = command.kind;
      throw new Error(`Unknown command kind: ${kind}`);
    }
  }
}
