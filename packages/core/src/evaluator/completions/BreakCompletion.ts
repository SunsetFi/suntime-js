import type { CompletionValue } from "./CompletionValue.js";
import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class BreakCompletion extends ControlFlowCompletion {
  constructor(public readonly target: string | null = null) {
    super("break");
  }

  withValue(value: CompletionValue): this {
    const newCompletion = new BreakCompletion(this.target);
    newCompletion.value = value;
    return newCompletion as this;
  }

  static isBreakForLabel(e: unknown, label: string | null): e is BreakCompletion {
    return e instanceof BreakCompletion && (e.target === null || e.target === label);
  }
}
