import type EvaluationGenerator from "./EvaluationGenerator.js";

export function* evaluateCommands<TReturn>(
  generator: EvaluationGenerator<TReturn>,
): Generator<void, TReturn, void> {
  while (true) {
    yield;
    const { value, done } = generator.next(null);

    if (done) {
      return value;
    }
  }
}
