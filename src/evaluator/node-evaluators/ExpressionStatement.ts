import { ExpressionStatement } from "@babel/types";

import { StaticJsValue } from "../../runtime/index.js";

import { evaluateNode } from "./nodes.js";
import { assertValueResult } from "./node-evaluation-result.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  context: NodeEvaluationContext,
): StaticJsValue {
  const result = evaluateNode(node.expression, context);
  assertValueResult(result);
  return result;
}
