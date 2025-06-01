import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class ContinueCompletion extends ControlFlowCompletion {
  constructor(public readonly target: string | null = null) {
    super("continue");
  }

  static isContinueForLabel(
    e: unknown,
    label: string | null,
  ): e is ContinueCompletion {
    return (
      e instanceof ContinueCompletion &&
      (e.target === null || e.target === label)
    );
  }
}
