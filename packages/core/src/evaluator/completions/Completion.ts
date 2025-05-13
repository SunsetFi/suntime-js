import type { BreakCompletion } from "./BreakCompletion.js";
import type { ContinueCompletion } from "./ContinueCompletion.js";
import type { NormalCompletion } from "./NormalCompletion.js";
import type { ReturnCompletion } from "./ReturnCompletion.js";
import type { ThrowCompletion } from "./ThrowCompletion.js";

export type Completion =
  | BreakCompletion
  | ContinueCompletion
  | NormalCompletion
  | ReturnCompletion
  | ThrowCompletion;
