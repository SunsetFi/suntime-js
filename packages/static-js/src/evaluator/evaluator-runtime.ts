import { executeEvaluatorCommand } from "./commands/index.js";
import EvaluationGenerator from "./EvaluationGenerator.js";

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
