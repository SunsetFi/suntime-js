import { BooleanLiteral } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
  scope: StaticJsScope,
): StaticJsValue;
