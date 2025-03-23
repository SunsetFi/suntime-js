import { EvaluatorCommand, executeEvaluatorCommand } from "./commands/index.js";
import EvaluationResult, { isEvaluationResult } from "./EvaluationResult.js";

export function runUntilCompletion<TReturn>(
  generator: Generator<EvaluatorCommand, TReturn, EvaluationResult>,
): TReturn {
  const iterator = evaluateCommands(generator);

  let iteratorResult = iterator.next();
  while (!iteratorResult.done) {
    iteratorResult = iterator.next();
  }

  return iteratorResult.value;
}

function* evaluateCommands<TReturn>(
  generator: Generator<EvaluatorCommand, TReturn, EvaluationResult>,
): Generator<void, TReturn, void> {
  let result = generator.next();
  while (!result.done) {
    const command = result.value;
    const commandResult = yield* evaluateCommands(
      executeEvaluatorCommand(command),
    );
    result = generator.next(commandResult);
  }

  return result.value as TReturn;
}
