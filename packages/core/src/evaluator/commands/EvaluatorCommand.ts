import type { AwaitCommand } from "./AwaitCommand.js";
import type { EnterNodeCommand } from "./EnterNodeCommand.js";
import type { ExitNodeCommand } from "./ExitNodeCommand.js";
import type { YieldCommand } from "./YieldCommand.js";

import { FunctionEnterCommand } from "./FunctionEnterCommand.js";
import { FunctionExitCommand } from "./FunctionExitCommand.js";

export type EvaluatorCommand =
  | AwaitCommand
  | YieldCommand
  | EnterNodeCommand
  | ExitNodeCommand
  | FunctionEnterCommand
  | FunctionExitCommand;
