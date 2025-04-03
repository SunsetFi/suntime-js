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
    // So apparently you can actually redeclare these in NodeJS.
    yield* context.env.createMutableBindingEvaluator(functionName, false);

    // Strict mode is whatever here; our binding will always exist, as it is
    // created above.
    yield* context.env.setMutableBindingEvaluator(functionName, func, true);
  }

  return false;
}

export default typedMerge(functionDeclarationNodeEvaluator, {
  environmentSetup: functionDeclarationEnvironmentSetup,
});
