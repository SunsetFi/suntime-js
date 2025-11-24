import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";
import type { NormalCompletion } from "./completions/NormalCompletion.js";

type EvaluationGenerator<TReturn = NormalCompletion> = Generator<
  EvaluatorCommand,
  TReturn,
  NormalCompletion
>;
export default EvaluationGenerator;
