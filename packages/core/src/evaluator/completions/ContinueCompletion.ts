import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class ContinueCompletion extends ControlFlowCompletion {
  constructor(public readonly target: string | null = null) {
    super("continue");
  }
}
