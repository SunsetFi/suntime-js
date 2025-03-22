import {
  ContinueEvaluation,
  NodeEvaluationResult,
} from "./node-evaluation-result.js";

export default function continueStatementNodeEvaluator(): NodeEvaluationResult {
  return ContinueEvaluation;
}
