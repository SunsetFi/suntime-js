import EvaluationGenerator from "../../EvaluationGenerator.js";

import { EvaluatorCommand } from "../types/index.js";

import executeEvaluateNodeCommand from "./EvaluateNodeCommandImpl.js";

export function executeEvaluatorCommand(
  command: EvaluatorCommand,
): EvaluationGenerator {
  switch (command.kind) {
    case "evalute-node":
      return executeEvaluateNodeCommand(command);
    default: {
      // @ts-expect-error: We want to ensure we handle all cases.
      const type = command.type;
      throw new Error(`Unknown command type: ${type}`);
    }
  }
}
