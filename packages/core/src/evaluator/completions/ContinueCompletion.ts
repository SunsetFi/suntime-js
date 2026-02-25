import type { CompletionValue } from "./CompletionValue.js";

import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class ContinueCompletion extends ControlFlowCompletion {
  constructor(public readonly target: string | null = null) {
    super("continue");
  }

  withValue(value: CompletionValue): this {
    const newCompletion = new ContinueCompletion(this.target);
    newCompletion.value = value;
    return newCompletion as this;
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
