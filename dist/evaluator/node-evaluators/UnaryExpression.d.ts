import { UnaryExpression } from "@babel/types";
import { StaticJsEnvironment, StaticJsValue } from "../../environment/index.js";
export default function unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  env: StaticJsEnvironment,
): StaticJsValue;
