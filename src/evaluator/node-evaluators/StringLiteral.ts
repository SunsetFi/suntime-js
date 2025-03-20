import { StringLiteral } from "@babel/types";
import { StaticJsString, StaticJsValue } from "../../environment/index.js";

export default function stringLiteralNodeEvaluator(
  node: StringLiteral,
): StaticJsValue {
  return StaticJsString(node.value);
}
