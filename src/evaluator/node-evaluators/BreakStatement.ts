import EvaluationGenerator from "../EvaluationGenerator.js";
import { BreakEvaluationResult } from "../EvaluationResult.js";

export default function* breakStatementNodeEvaluator(): EvaluationGenerator {
  return BreakEvaluationResult;
}
