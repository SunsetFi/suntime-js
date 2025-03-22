import { BooleanLiteral } from "@babel/types";
import { StaticJsBoolean, StaticJsValue } from "../../runtime/index.js";

export default function booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
): StaticJsValue {
  return StaticJsBoolean(node.value);
}
