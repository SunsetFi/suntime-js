import { EvaluatorCommand } from "./commands/types/index.js";
import EvaluationResult from "./EvaluationResult.js";

type EvaluationGenerator<TReturn = EvaluationResult> = Generator<
  EvaluatorCommand,
  TReturn,
  EvaluationResult
>;
export default EvaluationGenerator;
