import { FunctionDeclaration } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion } from "../completions/index.js";

import createFunction from "./Function.js";

function* functionDeclarationNodeEvaluator(
  _node: FunctionDeclaration,
): EvaluationGenerator {
  return NormalCompletion(null);
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

  return false;
}

export default typedMerge(functionDeclarationNodeEvaluator, {
  environmentSetup: functionDeclarationEnvironmentSetup,
});
