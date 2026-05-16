import type { AwaitCommand } from "./AwaitCommand.js";
import type { EnterNodeCommand } from "./EnterNodeCommand.js";
import type { ExitNodeCommand } from "./ExitNodeCommand.js";
import { FunctionEnterCommand } from "./FunctionEnterCommand.js";
import { FunctionExitCommand } from "./FunctionExitCommand.js";
import { SuspendCommand } from "./SuspendCommand.js";
import type { YieldCommand } from "./YieldCommand.js";

export type EvaluatorCommand =
  | AwaitCommand
  | YieldCommand
  | SuspendCommand
  | EnterNodeCommand
  | ExitNodeCommand
  | FunctionEnterCommand
  | FunctionExitCommand;
