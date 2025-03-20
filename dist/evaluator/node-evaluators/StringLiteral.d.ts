import { StringLiteral } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function stringLiteralNodeEvaluator(
  node: StringLiteral,
  scope: StaticJsScope,
): StaticJsValue;
