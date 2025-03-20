import { NumericLiteral } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function numericLiteralNodeEvaluator(
  node: NumericLiteral,
  scope: StaticJsScope,
): StaticJsValue;
