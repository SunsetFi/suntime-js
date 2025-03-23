import EvaluationGenerator from "../EvaluationGenerator.js";
import { ContinueEvaluationResult } from "../EvaluationResult.js";

export default function* continueStatementNodeEvaluator(): EvaluationGenerator {
  return ContinueEvaluationResult;
}
