import {
  BreakEvaluation,
  NodeEvaluationResult,
} from "./node-evaluation-result.js";

export default function breakStatementNodeEvaluator(): NodeEvaluationResult {
  return BreakEvaluation;
}
