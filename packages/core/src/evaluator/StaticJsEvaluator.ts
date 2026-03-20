import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export type StaticJsEvaluator<T = unknown> =
  | EvaluationGenerator<T>
  | (() => EvaluationGenerator<T>);

export function invokeEvaluator<T>(evaluator: StaticJsEvaluator<T>): EvaluationGenerator<T> {
  if (typeof evaluator === "function") {
    return evaluator();
  } else {
    return evaluator;
  }
}
