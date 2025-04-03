import { FunctionExpression } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

import createFunction from "./Function.js";

function* expressionStatementNodeEvaluator(
  node: FunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const functionName = node.id?.name ?? null;
  return NormalCompletion(createFunction(functionName, node, context));
}

export default typedMerge(expressionStatementNodeEvaluator, {
  environmentSetup: function* () {
    return false;
  },
});
