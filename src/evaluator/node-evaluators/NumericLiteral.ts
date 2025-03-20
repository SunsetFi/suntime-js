import { NumericLiteral } from "@babel/types";
import { StaticJsNumber, StaticJsValue } from "../../environment/index.js";

export default function numericLiteralNodeEvaluator(
  node: NumericLiteral,
): StaticJsValue {
  return StaticJsNumber(node.value);
}
