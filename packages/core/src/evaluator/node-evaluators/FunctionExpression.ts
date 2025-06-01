import type { FunctionExpression } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import createFunction from "./Function.js";

function* expressionStatementNodeEvaluator(
  node: FunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const functionName = node.id?.name ?? null;
  return createFunction(functionName, node, context);
}

export default typedMerge(expressionStatementNodeEvaluator, {
  environmentSetup: false,
});
