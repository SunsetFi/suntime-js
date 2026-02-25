import type { Completion } from "./Completion.js";
import isAbruptCompletion from "./AbruptCompletion.js";
import type { CompletionValue } from "./CompletionValue.js";
import rethrowCompletion from "./rethrow-completion.js";

// Note: This implements the '?' spec of unwrapping the completion if abrupt.
export default function updateEmpty(
  completion: Completion,
  value: CompletionValue,
): CompletionValue {
  const result = updateEmptyForCompletion(completion, value);
  return rethrowCompletion(result);
}

updateEmpty.forCompletion = updateEmptyForCompletion;

function updateEmptyForCompletion(completion: Completion, value: CompletionValue): Completion {
  if (isAbruptCompletion(completion)) {
    if (completion.value !== null) {
      return completion;
    }

    if (value === null) {
      return completion;
    }

    return completion.withValue(value);
  }

  if (completion) {
    return completion;
  }

  return value;
}
