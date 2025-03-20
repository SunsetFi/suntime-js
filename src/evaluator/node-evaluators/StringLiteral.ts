import { StringLiteral } from "@babel/types";
import {
  StaticJsScope,
  StaticJsString,
  StaticJsValue,
} from "../../environment/index.js";

export default function stringLiteralNodeEvaluator(
  node: StringLiteral,
  scope: StaticJsScope,
): StaticJsValue {
  return StaticJsString(node.value);
}
