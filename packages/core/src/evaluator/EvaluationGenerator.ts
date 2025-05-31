import { EvaluatorCommand } from "./commands/EvaluatorCommand.js";
import { Completion } from "./completions/index.js";

type EvaluationGenerator<TReturn = Completion> = Generator<
  EvaluatorCommand,
  TReturn,
  Completion
>;
export default EvaluationGenerator;
