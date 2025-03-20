import { NumericLiteral } from "@babel/types";
import { StaticJsValue } from "../../environment/index.js";
export default function numericLiteralNodeEvaluator(
  node: NumericLiteral,
): StaticJsValue;
