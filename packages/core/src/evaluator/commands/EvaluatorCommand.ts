import type { AwaitCommand } from "./AwaitCommand.js";
import type { EvaluateNodeCommand } from "./EvaluateNodeCommand.js";

export type EvaluatorCommand = AwaitCommand | EvaluateNodeCommand;
