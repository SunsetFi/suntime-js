import { BooleanLiteral } from "@babel/types";
import { StaticJsBoolean, StaticJsValue } from "../../environment/index.js";

export default function booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
): StaticJsValue {
  return StaticJsBoolean(node.value);
}
