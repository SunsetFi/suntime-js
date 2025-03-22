import { FunctionDeclaration } from "@babel/types";

import functionNodeEvaluator from "./Function.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";
import typedMerge from "../../internal/typed-merge.js";

function functionDeclarationNodeEvaluator() {
  return null;
}

function functionDeclarationEnvironmentSetup(
  node: FunctionDeclaration,
  context: NodeEvaluationContext,
) {
  const functionName = node.id?.name ?? null;
  const func = functionNodeEvaluator(functionName, node, context);

  if (functionName) {
    // So apparently you can actually redeclare these in NodeJS.
    context.env.createMutableBinding(functionName, false);

    // Strict mode is whatever here; our binding will always exist, as it is
    // created above.
    context.env.setMutableBinding(functionName, func, true);
  }

  return false;
}

export default typedMerge(functionDeclarationNodeEvaluator, {
  environmentSetup: functionDeclarationEnvironmentSetup,
});
