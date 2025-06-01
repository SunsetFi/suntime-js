import { AbnormalCompletion } from "./AbnormalCompletion.js";

export class BreakCompletion extends AbnormalCompletion {
  constructor(public readonly target: string | null = null) {
    super("break");
  }
}
