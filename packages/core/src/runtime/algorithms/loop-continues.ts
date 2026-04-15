import { Completion } from "../../evaluator/completions/Completion.js";

export function loopContinues(completion: Completion, labelSet: string[]): boolean {
  if (Completion.Normal.is(completion)) {
    return true;
  }

  if (!Completion.Continue.is(completion)) {
    return false;
  }

  if (completion.target === null) {
    return true;
  }

  if (labelSet.includes(completion.target)) {
    return true;
  }

  return false;
}
