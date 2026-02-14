import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export type StaticJsEvaluator<T = unknown> =
  | EvaluationGenerator<T>
  | (() => EvaluationGenerator<T>);
