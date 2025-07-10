import { isBlock, type FunctionDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import createFunction from "./Function.js";

function* functionDeclarationNodeEvaluator(
  node: FunctionDeclaration,
): EvaluationGenerator {
  const { function: func } = node.extra ?? {};
  if (!func) {
    throw new StaticJsEngineError(
      "Could not resolve function declaration at evaluation time.",
    );
  }

  return func as StaticJsFunction;
}

function* functionDeclarationEnvironmentSetup(
  node: FunctionDeclaration,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const functionName = node.id?.name ?? null;

  let functionContext = context;

  if (
    isBlock(node.body) &&
    node.body.directives.some(({ value }) => value.value === "use strict")
  ) {
    functionContext = context.createStrictContext();
  }

  const func = createFunction(
    functionName,
    node,
    functionContext.strict ? "strict" : "lexical",
    functionContext,
  );

  if (functionName) {
    yield* context.env.createFunctionBindingEvaluator(functionName, func);
  }

  // FIXME: We have been so careful to get away with not mutating the node, but here
  // we have to preserve the reference for evaluation time...
  // Do we at least want to use a symbol?  A WeakMap?
  node.extra = {
    function: func,
  };

  return false;
}

export default typedMerge(functionDeclarationNodeEvaluator, {
  environmentSetup: functionDeclarationEnvironmentSetup,
});
