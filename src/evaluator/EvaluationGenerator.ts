import { EvaluatorCommand } from "./commands/types/index.js";
import EvaluationResult from "./EvaluationResult.js";

type EvaluationGenerator = Generator<
  EvaluatorCommand,
  EvaluationResult,
  EvaluationResult
>;
export default EvaluationGenerator;
