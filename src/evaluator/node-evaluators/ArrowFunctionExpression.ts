import { ArrowFunctionExpression } from "@babel/types";
import { NodeEvaluationContext } from "./node-evaluation-context.js";
import functionNodeEvaluator from "./Function.js";
import { StaticJsValue } from "../../runtime/index.js";
import typedMerge from "../../internal/typed-merge.js";

function arrowFunctionExpressionNodeEvaluator(
  node: ArrowFunctionExpression,
  context: NodeEvaluationContext,
): StaticJsValue {
  return functionNodeEvaluator(null, node, context);
}

export default typedMerge(arrowFunctionExpressionNodeEvaluator, {
  environmentSetup: () => false,
});
