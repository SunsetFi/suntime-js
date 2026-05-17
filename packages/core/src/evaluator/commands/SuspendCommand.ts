import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../completions/Completion.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluatorCommand } from "./EvaluatorCommand.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface SuspendContext<TOutput = unknown> {
  generator: EvaluationGenerator<unknown> | null;
  evaluationContext: EvaluationContext | null;
  __kind_output: TOutput & void;
}

export interface SuspendCommand<TOutput = unknown> extends EvaluatorCommandBase {
  command: "suspend";
  context: SuspendContext<TOutput>;
  output: TOutput;
}
export function SuspendCommand<TOutput>(
  context: SuspendContext<TOutput>,
  output: TOutput,
): EvaluationGenerator<Completion>;
export function SuspendCommand<TOutput>(
  context: SuspendContext<TOutput>,
): EvaluationGenerator<Completion>;
export function* SuspendCommand<TOutput>(
  context: SuspendContext<TOutput>,
  output?: TOutput,
): EvaluationGenerator<Completion> {
  let result: Completion;
  try {
    result = yield {
      command: "suspend",
      context,
      output,
    };
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      return e;
    }

    throw e;
  }

  if (!Completion.is(result)) {
    throw new StaticJsEngineError("Expected Completion from suspend, got: " + result);
  }

  return result;
}

SuspendCommand.is = function (value: EvaluatorCommand): value is SuspendCommand {
  return value.command === "suspend";
};

function createContext(): SuspendContext;
function createContext<TOutput>(): SuspendContext<TOutput>;
function createContext<TOutput>(): SuspendContext<TOutput> {
  return {
    generator: null,
    evaluationContext: null,
    __kind_output: undefined as any,
  };
}
SuspendCommand.createContext = createContext;

function createSuspendContext(
  generator: EvaluationGenerator<unknown>,
  evaluationContext?: EvaluationContext,
): SuspendContext;
function createSuspendContext<TOutput>(
  generator: EvaluationGenerator<unknown>,
  evaluationContext?: EvaluationContext,
): SuspendContext<TOutput>;
function createSuspendContext<TOutput>(
  generator: EvaluationGenerator<unknown>,
  evaluationContext: EvaluationContext = EvaluationContext.current,
): SuspendContext<TOutput> {
  return {
    generator,
    evaluationContext,
    __kind_output: undefined as any,
  };
}
SuspendCommand.createSuspendedContext = createSuspendContext;

SuspendCommand.run = function* <T>(
  generator: EvaluationGenerator<T>,
  completion: Completion = null,
): EvaluationGenerator<T | null> {
  while (true) {
    // In practice, this should usually be paused at a SuspendCommand, which doesn't actually want
    // thrown abrupt completions.  However, EvaluationCompletion is configured to only allow
    // NormalCompletion iteration results...
    // We should fix this, at some time, somehow.
    let { done, value } = generatorNextCaptureCompletion(generator, completion);

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
      EvaluationContext.pop();
      return command.output as T;
    }

    completion = yield command;
  }
};

function generatorNextCaptureCompletion<T>(
  generator: EvaluationGenerator<T>,
  completion: Completion,
): IteratorResult<EvaluatorCommand, T> {
  // In practice, this SHOULD be a SuspendCommand, which doesn't actually want
  // throwing.
  if (Completion.Abrupt.is(completion)) {
    return generator.throw(completion);
  } else {
    return generator.next(completion);
  }
}

SuspendCommand.runSuspendedContext = function* <T>(
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
