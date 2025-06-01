import { EmptyStatement } from "@babel/types";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* emptyStatementNodeEvaluator(
  _node: EmptyStatement,
): EvaluationGenerator {
  return NormalCompletion();
}
