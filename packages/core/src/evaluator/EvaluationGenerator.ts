import { EvaluatorCommand } from "./commands/EvaluatorCommand.js";
import { Completion } from "./completions/Completion.js";

type EvaluationGenerator<TReturn = Completion> = Generator<
  EvaluatorCommand,
  TReturn,
  Completion
>;
export default EvaluationGenerator;
