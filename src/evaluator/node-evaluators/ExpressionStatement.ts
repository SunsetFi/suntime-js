import { ExpressionStatement } from "@babel/types";

import { StaticJsEnvironment, StaticJsValue } from "../../environment/index.js";

import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";

export default function expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  env: StaticJsEnvironment,
): StaticJsValue {
  const result = evaluateNode(node.expression, env);
  assertValueResult(result);
  return result;
}
