import { StringLiteral } from "@babel/types";
import { StaticJsValue } from "../../environment/index.js";
export default function stringLiteralNodeEvaluator(
  node: StringLiteral,
): StaticJsValue;
