import { NumericLiteral } from "@babel/types";
import {
  StaticJsNumber,
  StaticJsScope,
  StaticJsValue,
} from "../../environment/index.js";

export default function numericLiteralNodeEvaluator(
  node: NumericLiteral,
  scope: StaticJsScope,
): StaticJsValue {
  return StaticJsNumber(node.value);
}
