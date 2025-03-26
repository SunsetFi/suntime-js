import { NumericLiteral } from "@babel/types";
import { StaticJsNumber } from "../../runtime/index.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

export default function* numericLiteralNodeEvaluator(
  node: NumericLiteral,
): EvaluationGenerator {
  return NormalCompletion(StaticJsNumber(node.value));
}
