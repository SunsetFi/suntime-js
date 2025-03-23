import EvaluationGenerator from "../../EvaluationGenerator.js";

import { EvaluatorCommand } from "../types/index.js";

import executeEvaluateNodeCommand from "./EvaluateNodeCommandImpl.js";

export function executeEvaluatorCommand(
  command: EvaluatorCommand,
): EvaluationGenerator {
  switch (command.kind) {
    case "evalute-node":
      return executeEvaluateNodeCommand(command);
    default:
      throw new Error(`Unknown command type: ${(command as any).type}`);
  }
}
