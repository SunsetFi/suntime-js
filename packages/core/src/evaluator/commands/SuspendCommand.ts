import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../completions/Completion.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluatorCommand } from "./EvaluatorCommand.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface SuspendContextResumptionValue<TCallerResumptionValue = unknown> {
  __kind_resumption_value: TCallerResumptionValue;
}

export interface InitialSuspendContext<
  TCallerResumptionValue = unknown,
> extends SuspendContextResumptionValue<TCallerResumptionValue> {
  state: "initial";
  generator: null;
  evaluationContext: null;
}

export interface PrimedSuspendContext<
  TCallerResumptionValue = unknown,
> extends SuspendContextResumptionValue<TCallerResumptionValue> {
  state: "primed";
  generator: EvaluationGenerator<unknown>;
  evaluationContext: EvaluationContext;
}

export interface ConsumedSuspendContext<
  TCallerResumptionValue = unknown,
> extends SuspendContextResumptionValue<TCallerResumptionValue> {
  state: "consumed";
  generator: null;
  evaluationContext: null;
}

export type SuspendContext<TCallerResumptionValue = unknown> =
  | InitialSuspendContext<TCallerResumptionValue>
  | PrimedSuspendContext<TCallerResumptionValue>
  | ConsumedSuspendContext<TCallerResumptionValue>;

export interface SuspendCommand<TCallerResumptionValue = unknown> extends EvaluatorCommandBase {
  command: "suspend";
  context: SuspendContext<TCallerResumptionValue>;
  callerResumptionValue: TCallerResumptionValue;
}
export function SuspendCommand<TCallerResumptionValue>(
  context: SuspendContext<TCallerResumptionValue>,
  callerResumptionValue: TCallerResumptionValue,
): EvaluationGenerator<Completion>;
export function SuspendCommand<TCallerResumptionValue>(
  context: SuspendContext<TCallerResumptionValue>,
): EvaluationGenerator<Completion>;
export function* SuspendCommand<TCallerResumptionValue>(
  context: SuspendContext<TCallerResumptionValue>,
  callerResumptionValue?: TCallerResumptionValue,
): EvaluationGenerator<Completion> {
  let result: Completion;
  try {
    result = yield {
      command: "suspend",
      context,
      callerResumptionValue: callerResumptionValue,
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
function createContext<TCallerResumptionValue>(): SuspendContext<TCallerResumptionValue>;
function createContext<TCallerResumptionValue>(): SuspendContext<TCallerResumptionValue> {
  return {
    state: "initial",
    generator: null,
    evaluationContext: null,
    __kind_resumption_value: undefined as any,
  };
}
SuspendCommand.createContext = createContext;

function createSuspendContext(
  generator: EvaluationGenerator<unknown>,
  evaluationContext?: EvaluationContext,
): SuspendContext;
function createSuspendContext<TCallerResumptionValue>(
  generator: EvaluationGenerator<TCallerResumptionValue>,
  evaluationContext?: EvaluationContext,
): SuspendContext<TCallerResumptionValue>;
function createSuspendContext<TCallerResumptionValue>(
  generator: EvaluationGenerator<TCallerResumptionValue>,
  evaluationContext: EvaluationContext = EvaluationContext.current,
): SuspendContext<TCallerResumptionValue> {
  const initial = createContext<TCallerResumptionValue>();
  suspendedContextPrime(initial, generator, evaluationContext);
  return initial;
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

      suspendedContextPrime(command.context, generator, EvaluationContext.current);
      EvaluationContext.pop();

      return command.callerResumptionValue as T;
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
  // However, EvaluationGenerator says we return NormalCompletions as our iteration output,
  // so typescript gets angry if we do.
  // Should fix this as part of the Completion migration.
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

  const [generator, evaluationContext] = suspendedContextConsume(context);

  EvaluationContext.push(evaluationContext);

  const result = yield* SuspendCommand.run(generator, completion);

  return result as T;
};

function suspendedContextPrime(
  context: SuspendContext,
  generator: EvaluationGenerator<unknown>,
  evaluationContext: EvaluationContext,
): void {
  if (context.state === "primed") {
    throw new StaticJsEngineError(
      `Can only prime an already-primed context.  Current state: ${context.state}`,
    );
  }

  const primed = context as unknown as PrimedSuspendContext;
  primed.state = "primed";
  primed.generator = generator;
  primed.evaluationContext = evaluationContext;
}

function suspendedContextConsume(
  context: SuspendContext,
): [generator: EvaluationGenerator<unknown>, evaluationContext: EvaluationContext] {
  if (context.state !== "primed") {
    throw new StaticJsEngineError(
      `Can only consume a primed suspend context.  Current state: ${context.state}`,
    );
  }

  const { generator, evaluationContext } = context;

  const consumed = context as unknown as ConsumedSuspendContext;
  consumed.state = "consumed";
  consumed.generator = null;
  consumed.evaluationContext = null;

  return [generator, evaluationContext];
}
