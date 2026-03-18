import type { AwaitCommand } from "./AwaitCommand.js";
import type { EvaluateNodeCommand } from "./EvaluateNodeCommand.js";
import { FunctionEnterCommand } from "./FunctionEnter.js";
import { FunctionExitCommand } from "./FunctionExit.js";
import type { YieldCommand } from "./YieldCommand.js";

export type EvaluatorCommand =
  | AwaitCommand
  | YieldCommand
  | EvaluateNodeCommand
  | FunctionEnterCommand
  | FunctionExitCommand;
