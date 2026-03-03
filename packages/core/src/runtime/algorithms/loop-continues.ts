import { Completion } from "../../evaluator/completions/Completion.js";

// Note: Spec expects a label set here, not a single label.
// Not sure if that has an appreciable effect.
export default function loopContinues(completion: Completion, label: string | null): boolean {
  if (Completion.Normal.is(completion)) {
    return true;
  }

  if (!Completion.Continue.is(completion)) {
    return false;
  }

  if (completion.target === null) {
    return true;
  }

  if (completion.target === label) {
    return true;
  }

  return false;
}
