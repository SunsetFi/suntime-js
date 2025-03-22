import { FunctionExpression } from "@babel/types";

import { StaticJsValue } from "../../runtime/index.js";

import functionNodeEvaluator from "./Function.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";
import typedMerge from "../../internal/typed-merge.js";

function expressionStatementNodeEvaluator(
  node: FunctionExpression,
  context: NodeEvaluationContext,
): StaticJsValue {
  const functionName = node.id?.name ?? null;
  return functionNodeEvaluator(functionName, node, context);
}

export default typedMerge(expressionStatementNodeEvaluator, {
  environmentSetup: () => false,
});
