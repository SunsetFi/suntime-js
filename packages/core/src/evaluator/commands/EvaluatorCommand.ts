import type { NodeEnterCommand } from "./NodeEnterCommand.js";
import type { NodeExitCommand } from "./NodeExitCommand.js";

import { FunctionEnterCommand } from "./FunctionEnterCommand.js";
import { FunctionExitCommand } from "./FunctionExitCommand.js";
import { SuspendCommand } from "./SuspendCommand.js";

export type EvaluatorCommand =
  | SuspendCommand
  | NodeEnterCommand
  | NodeExitCommand
  | FunctionEnterCommand
  | FunctionExitCommand;
