import { FunctionExpression } from "@babel/types";

import { StaticJsValue } from "../../runtime/index.js";

import functionNodeEvaluator from "./Function.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function expressionStatementNodeEvaluator(
  node: FunctionExpression,
  context: NodeEvaluationContext,
): StaticJsValue {
  const functionName = node.id?.name ?? null;
  return functionNodeEvaluator(functionName, node, context);
}
