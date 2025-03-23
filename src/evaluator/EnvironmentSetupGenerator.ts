import { EvaluatorCommand } from "./commands/types/index.js";
import EvaluationResult from "./EvaluationResult.js";

type EnvironmentSetupGenerator = Generator<
  EvaluatorCommand,
  boolean,
  EvaluationResult
>;
export default EnvironmentSetupGenerator;
