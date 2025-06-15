import executeEvaluatorCommand from "./commands/execute-command.js";
import type EvaluationGenerator from "./EvaluationGenerator.js";

export function* evaluateCommands<TReturn>(
  generator: EvaluationGenerator<TReturn>,
): Generator<void, TReturn, void> {
  const stack: EvaluationGenerator<unknown>[] = [generator];
  let lastValueType: "next" | "throw" = "next";
  let lastValue: unknown = undefined;
  while (stack.length > 0) {
    const current = stack.at(-1)!;

    try {
      yield;
      const { value, done } = current[lastValueType](lastValue);

      lastValueType = "next";

      if (done) {
        stack.pop();
        lastValue = value;
        continue;
      }

      const nextGen = executeEvaluatorCommand(value);
      stack.push(nextGen);
    } catch (e: unknown) {
      yield;
      lastValueType = "throw";
      lastValue = e;
      stack.pop();
    }
  }

  if (lastValueType === "throw") {
    throw lastValue;
  }

  return lastValue as TReturn;
}
