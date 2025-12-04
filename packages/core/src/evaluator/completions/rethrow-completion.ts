import { AbnormalCompletionBase } from "./AbnormalCompletionBase.js";
import type { Completion } from "./Completion.js";
import type { NormalCompletion } from "./NormalCompletion.js";

export default function rethrowCompletion(
  completion: Completion,
): NormalCompletion {
  if (completion instanceof AbnormalCompletionBase) {
    throw completion;
  }

  return completion;
}
