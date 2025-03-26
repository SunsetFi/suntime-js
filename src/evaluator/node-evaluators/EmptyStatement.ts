import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

export default function* emptyStatementNodeEvaluator(): EvaluationGenerator {
  return NormalCompletion();
}
