import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";
import type { Completion } from "./completions/Completion.js";

export type EvaluationGenerator<TReturn = Completion.Normal> = Generator<
  EvaluatorCommand,
  TReturn,
  Completion.Normal
>;
