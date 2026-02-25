import type { Completion } from "./Completion.js";
import isAbruptCompletion from "./AbruptCompletion.js";
import type { CompletionValue } from "./CompletionValue.js";

export default function completionValue(completion: Completion): CompletionValue {
  if (isAbruptCompletion(completion)) {
    return completion.value;
  }
  return completion;
}
