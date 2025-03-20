import { NullLiteral } from "@babel/types";
import {
  StaticJsNull,
  StaticJsScope,
  StaticJsValue,
} from "../../environment/index.js";

export default function nullLiteralNodeEvaluator(
  node: NullLiteral,
  scope: StaticJsScope,
): StaticJsValue {
  return StaticJsNull();
}
