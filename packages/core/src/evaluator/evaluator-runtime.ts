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

      // It seems counterintuitive to set lastValue to undefined here (instead of value),
      // but 'value' represents an entry into a recursive evaluation, which is starting fresh.
      // lastValue needs to be value only when a generator completes, as that returns the completion
      // to the parent generator that spawned it.
      lastValue = undefined;

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
