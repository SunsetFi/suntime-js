import { executeEvaluatorCommand } from "./commands/index.js";
import EvaluationGenerator from "./EvaluationGenerator.js";
import { Completion } from "./internal.js";

export function runEvaluatorUntilCompletion<TReturn>(
  generator: EvaluationGenerator<TReturn>,
): TReturn {
  const iterator = evaluateCommands(generator);

  let iteratorResult = iterator.next();
  while (!iteratorResult.done) {
    iteratorResult = iterator.next();
  }

  return iteratorResult.value;
}

export function* evaluateCommands<TReturn>(
  generator: EvaluationGenerator<TReturn>,
): Generator<void, TReturn, void> {
  const stack: EvaluationGenerator<unknown>[] = [generator];
  let lastValue: unknown = undefined;
  while (stack.length > 0) {
    const current = stack.at(-1)!;
    const { value, done } = current.next(lastValue as Completion);

    if (done) {
      stack.pop();
      lastValue = value;
      continue;
    }

    const nextGen = executeEvaluatorCommand(value);
    stack.push(nextGen);
    yield;
  }

  return lastValue as TReturn;
}
