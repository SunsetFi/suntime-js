import { FunctionExpression } from "@babel/types";

import { StaticJsEnvironment, StaticJsValue } from "../../environment/index.js";

import functionNodeEvaluator from "./Function.js";

export default function expressionStatementNodeEvaluator(
  node: FunctionExpression,
  env: StaticJsEnvironment,
): StaticJsValue {
  const functionName = node.id?.name ?? null;
  return functionNodeEvaluator(functionName, node, env);
}
