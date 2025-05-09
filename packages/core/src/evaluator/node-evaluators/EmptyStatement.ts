import { EmptyStatement } from "@babel/types";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

export default function* emptyStatementNodeEvaluator(
  _node: EmptyStatement,
): EvaluationGenerator {
  return NormalCompletion();
}
