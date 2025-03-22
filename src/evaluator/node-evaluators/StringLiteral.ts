import { StringLiteral } from "@babel/types";
import { StaticJsString, StaticJsValue } from "../../runtime/index.js";

export default function stringLiteralNodeEvaluator(
  node: StringLiteral,
): StaticJsValue {
  return StaticJsString(node.value);
}
