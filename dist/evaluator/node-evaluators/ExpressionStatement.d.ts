import { ExpressionStatement } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
export default function expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  scope: StaticJsScope,
): StaticJsValue;
