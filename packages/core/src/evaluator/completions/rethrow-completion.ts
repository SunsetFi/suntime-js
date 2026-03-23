import { Completion } from "./Completion.js";

export function rethrowCompletion(completion: Completion): Completion.Normal {
  if (Completion.Abrupt.is(completion)) {
    throw completion;
  }

  return completion;
}
