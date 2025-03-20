import { BooleanLiteral } from "@babel/types";
import { StaticJsValue } from "../../environment/index.js";
export default function booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
): StaticJsValue;
