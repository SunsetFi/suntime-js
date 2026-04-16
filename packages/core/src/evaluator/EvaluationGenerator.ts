import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";
import type { Completion } from "./completions/Completion.js";

export type EvaluationGenerator<TReturn = Completion.Normal> = Generator<
  EvaluatorCommand,
  TReturn,
  Completion.Normal
>;

export type MaybeEvaluationGenerator<T> = T | EvaluationGenerator<T>;

export function EvaluationGenerator<T>(maybe: MaybeEvaluationGenerator<T>): EvaluationGenerator<T> {
  if (isEvaluationGenerator(maybe)) {
    return maybe;
  }

  // Wrap the value in a generator that just returns it.
  return (function* () {
    return maybe;
  })();
}

export function isEvaluationGenerator(value: unknown): value is EvaluationGenerator<unknown> {
  return value instanceof Iterator;
}
