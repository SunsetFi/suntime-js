import { StringLiteral } from "@babel/types";

import { StaticJsString } from "../../runtime/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

export default function* stringLiteralNodeEvaluator(
  node: StringLiteral,
): EvaluationGenerator {
  return NormalCompletion(StaticJsString(node.value));
}
