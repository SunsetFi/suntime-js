import type EvaluatorCommandBase from "./commands/EvaluatorCommandBase.js";
import type { Completion } from "./completions/Completion.js";
import { CompletionValue } from "./completions/CompletionValue.js";

// The yielded command is engine-internal machinery: consumers never construct
// or inspect it, only the task runner does. We expose the opaque base type
// (`{ command: string }`) rather than the concrete `EvaluatorCommand` union so
// the union and its transitive payloads (SuspendContext, EvaluationContext,
// script/module records, Babel AST nodes) stay off the public API surface.
export type EvaluationGenerator<TReturn = Completion.Normal> = Generator<
  EvaluatorCommandBase,
  TReturn,
  Completion.Normal
>;

export type MaybeEvaluationGenerator<T> = T | EvaluationGenerator<T>;

export function EvaluationGenerator<T>(maybe: MaybeEvaluationGenerator<T>): EvaluationGenerator<T> {
  if (isEvaluationGenerator(maybe)) {
    return maybe;
  }

  // Wrap the value in a generator that just returns it.
  return new StubEvaluationGenerator(maybe);
}

export function isEvaluationGenerator(value: unknown): value is EvaluationGenerator<unknown> {
  return value instanceof Iterator;
}

export class StubEvaluationGenerator<T>
  extends Iterator<EvaluatorCommandBase, T, CompletionValue>
  implements EvaluationGenerator<T>
{
  override [Symbol.iterator]() {
    return this;
  }

  constructor(private _returnValue: T) {
    super();
  }

  override next(): IteratorResult<EvaluatorCommandBase, T> {
    return { done: true, value: this._returnValue };
  }

  override return(): IteratorResult<EvaluatorCommandBase, T> {
    return { done: true, value: this._returnValue };
  }

  override throw(): IteratorResult<EvaluatorCommandBase, T> {
    return { done: true, value: this._returnValue };
  }
}
