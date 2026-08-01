import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export type StaticJsEvaluator<T = unknown> =
  | EvaluationGenerator<T>
  | (() => EvaluationGenerator<T>);

export type StaticJsMemberEvaluator<TThis, T = unknown> =
  | ((this: TThis) => EvaluationGenerator<T>)
  | EvaluationGenerator<T>;

export function invokeEvaluator<T>(
  evaluator: StaticJsEvaluator<T>,
  thisArg?: unknown,
): EvaluationGenerator<T> {
  if (typeof evaluator === "function") {
    return evaluator.call(thisArg);
  } else {
    return evaluator;
  }
}
