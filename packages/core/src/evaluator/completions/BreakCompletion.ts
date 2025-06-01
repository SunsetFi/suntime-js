import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class BreakCompletion extends ControlFlowCompletion {
  constructor(public readonly target: string | null = null) {
    super("break");
  }
}
