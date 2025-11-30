import { BreakCompletion } from "./BreakCompletion.js";
import { ContinueCompletion } from "./ContinueCompletion.js";
import { ReturnCompletion } from "./ReturnCompletion.js";
import { ThrowCompletion } from "./ThrowCompletion.js";

export type AbnormalCompletion =
  | BreakCompletion
  | ContinueCompletion
  | ReturnCompletion
  | ThrowCompletion;

export function isAbnormalCompletion(
  value: unknown,
): value is AbnormalCompletion {
  return (
    value instanceof BreakCompletion ||
    value instanceof ContinueCompletion ||
    value instanceof ReturnCompletion ||
    value instanceof ThrowCompletion
  );
}
