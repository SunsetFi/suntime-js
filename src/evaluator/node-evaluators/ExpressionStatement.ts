import { ExpressionStatement } from "@babel/types";

import { StaticJsScope, StaticJsValue } from "../../environment/index.js";

import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";

export default function expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  scope: StaticJsScope,
): StaticJsValue {
  const result = evaluateNode(node.expression, scope);
  assertValueResult(result);
  return result;
}
