import { AbnormalCompletionBase } from "./AbnormalCompletionBase.js";
import type { Completion } from "./Completion.js";
import type { NormalCompletion } from "./NormalCompletion.js";

export function unwrapCompletion(completion: Completion): NormalCompletion {
  if (completion instanceof AbnormalCompletionBase) {
    throw completion;
  }

  return completion;
}
