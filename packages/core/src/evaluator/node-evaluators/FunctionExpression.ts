import { isBlock, type FunctionExpression } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import createFunction from "./Function.js";

function* expressionStatementNodeEvaluator(
  node: FunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const functionName = node.id?.name ?? null;

  let functionContext = context;
  if (
    isBlock(node.body) &&
    node.body.directives.some(({ value }) => value.value === "use strict")
  ) {
    functionContext = context.createStrictContext();
  }

  return createFunction(
    functionName,
    node,
    functionContext.strict ? "strict" : "lexical",
    functionContext,
  );
}

export default typedMerge(expressionStatementNodeEvaluator, {
  environmentSetup: false,
});
