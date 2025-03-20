import { BooleanLiteral } from "@babel/types";
import {
  StaticJsBoolean,
  StaticJsScope,
  StaticJsValue,
} from "../../environment/index.js";

export default function booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
  scope: StaticJsScope,
): StaticJsValue {
  return StaticJsBoolean(node.value);
}
