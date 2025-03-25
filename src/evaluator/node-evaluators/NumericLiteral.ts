import { NumericLiteral } from "@babel/types";
import { StaticJsNumber } from "../../runtime/internal.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* numericLiteralNodeEvaluator(
  node: NumericLiteral,
): EvaluationGenerator {
  return StaticJsNumber(node.value);
}
