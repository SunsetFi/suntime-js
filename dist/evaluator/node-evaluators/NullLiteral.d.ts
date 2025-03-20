import { NullLiteral } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function nullLiteralNodeEvaluator(
  node: NullLiteral,
  scope: StaticJsScope,
): StaticJsValue;
