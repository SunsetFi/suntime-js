import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type { Completion } from "./Completion.js";

export type CompletionEvaluator<T extends object | null = Completion.Normal> =
  | EvaluationGenerator<T | Completion.Abrupt>
  | (() => EvaluationGenerator<T | Completion.Abrupt>)
  | (() => T | Completion.Abrupt)
  | T
  | Completion.Abrupt;
