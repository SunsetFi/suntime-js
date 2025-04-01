import type { default as BreakCompletion } from "./BreakCompletion.js";
import type { default as ContinueCompletion } from "./ContinueCompletion.js";
import type { default as NormalCompletion } from "./NormalCompletion.js";
import type { default as ReturnCompletion } from "./ReturnCompletion.js";
import type { default as ThrowCompletion } from "./ThrowCompletion.js";

type Completion =
  | BreakCompletion
  | ContinueCompletion
  | NormalCompletion
  | ReturnCompletion
  | ThrowCompletion;
export default Completion;
