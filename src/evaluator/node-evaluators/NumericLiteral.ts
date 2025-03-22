import { NumericLiteral } from "@babel/types";
import { StaticJsNumber, StaticJsValue } from "../../runtime/index.js";

export default function numericLiteralNodeEvaluator(
  node: NumericLiteral,
): StaticJsValue {
  return StaticJsNumber(node.value);
}
