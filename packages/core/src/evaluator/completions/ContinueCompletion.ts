import { AbnormalCompletion } from "./AbnormalCompletion.js";

export class ContinueCompletion extends AbnormalCompletion {
  constructor(public readonly target: string | null = null) {
    super("continue");
  }
}
