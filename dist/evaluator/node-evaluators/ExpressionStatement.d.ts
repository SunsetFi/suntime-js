import { ExpressionStatement } from "@babel/types";
import { StaticJsEnvironment, StaticJsValue } from "../../environment/index.js";
export default function expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  env: StaticJsEnvironment,
): StaticJsValue;
