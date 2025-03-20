import { UnaryExpression } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  scope: StaticJsScope,
): StaticJsValue;
