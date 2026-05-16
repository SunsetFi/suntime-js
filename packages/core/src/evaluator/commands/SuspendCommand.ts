import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../completions/Completion.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluatorCommand } from "./EvaluatorCommand.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface SuspendContext {
  generator: EvaluationGenerator<unknown> | null;
  evaluationContext: EvaluationContext | null;
}

export interface SuspendCommand extends EvaluatorCommandBase {
  command: "suspend";
  context: SuspendContext;
}
export function* SuspendCommand(context: SuspendContext): EvaluationGenerator<Completion> {
  const result = yield {
    command: "suspend",
    context,
  };

  if (!Completion.is(result)) {
    throw new StaticJsEngineError("Expected Completion from suspend, got: " + result);
  }

  return result;
}

SuspendCommand.is = function (value: EvaluatorCommand): value is SuspendCommand {
  return value.command === "suspend";
};

SuspendCommand.createContext = function (): SuspendContext {
  return {
    generator: null,
    evaluationContext: null,
  };
};

SuspendCommand.run = function* <T>(
  generator: EvaluationGenerator<T>,
  completion: Completion = null,
): EvaluationGenerator<T | null> {
  while (true) {
    let { done, value } = generatorNextCaptureCompletion(generator, completion);

    if (Completion.Abrupt.is(value)) {
      completion = value;
      continue;
    }

    if (done) {
      return value as T;
    }

    // T can only occur when done is true.
    const command = value as EvaluatorCommand;

    if (SuspendCommand.is(command)) {
      if (command.context.generator) {
        throw new StaticJsEngineError("Suspend context is already running.");
      }
      command.context.generator = generator;
      command.context.evaluationContext = EvaluationContext.current;
      return null;
    }

    completion = yield command;
  }
};

function generatorNextCaptureCompletion<T>(
  generator: EvaluationGenerator<T>,
  completion: Completion,
): IteratorResult<EvaluatorCommand | Completion.Abrupt, T | Completion.Abrupt> {
  try {
    if (Completion.Abrupt.is(completion)) {
      return generator.throw(completion);
    } else {
      return generator.next(completion);
    }
  } catch (value) {
    if (Completion.Abrupt.is(value)) {
      return { done: false, value };
    }
    throw value;
  }
}

SuspendCommand.resume = function* <T>(
  context: SuspendContext,
  completion: Completion,
): EvaluationGenerator<T> {
  if (!context.generator) {
    throw new StaticJsEngineError("Suspend context is not running.");
  }
  const generator = context.generator;
  EvaluationContext.push(context.evaluationContext!);
  context.generator = null;
  context.evaluationContext = null;
  const result = yield* SuspendCommand.run(generator, completion);
  return result as T;
};
