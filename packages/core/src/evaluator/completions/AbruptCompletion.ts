import { BreakCompletion } from "./BreakCompletion.js";
import { ContinueCompletion } from "./ContinueCompletion.js";
import { ReturnCompletion } from "./ReturnCompletion.js";
import { ThrowCompletion } from "./ThrowCompletion.js";

export type AbruptCompletion =
  | BreakCompletion
  | ContinueCompletion
  | ReturnCompletion
  | ThrowCompletion;

export default function isAbruptCompletion(
  value: unknown,
): value is AbruptCompletion {
  return (
    value instanceof BreakCompletion ||
    value instanceof ContinueCompletion ||
    value instanceof ReturnCompletion ||
    value instanceof ThrowCompletion
  );
}
