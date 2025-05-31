import { FunctionDeclaration } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { StaticJsFunction } from "../../runtime/types/interfaces/StaticJsFunction.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion } from "../completions/index.js";

import createFunction from "./Function.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

function* functionDeclarationNodeEvaluator(
  node: FunctionDeclaration,
): EvaluationGenerator {
  const { function: func } = node.extra ?? {};
  if (!func) {
    throw new StaticJsEngineError(
      "Could not resolve function declaration at evaluation time.",
    );
  }

  return NormalCompletion(func as StaticJsFunction);
}

function* functionDeclarationEnvironmentSetup(
  node: FunctionDeclaration,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const functionName = node.id?.name ?? null;
  const func = createFunction(functionName, node, context);

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
