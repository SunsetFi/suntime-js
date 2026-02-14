import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";
import type { NormalCompletion } from "./completions/NormalCompletion.js";

export type EvaluationGenerator<TReturn = NormalCompletion> = Generator<
  EvaluatorCommand,
  TReturn,
  NormalCompletion
>;
