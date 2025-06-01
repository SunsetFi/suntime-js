import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class BreakCompletion extends ControlFlowCompletion {
  constructor(public readonly target: string | null = null) {
    super("break");
  }

  static isBreakForLabel(
    e: unknown,
    label: string | null,
  ): e is BreakCompletion {
    return (
      e instanceof BreakCompletion && (e.target === null || e.target === label)
    );
  }
}
