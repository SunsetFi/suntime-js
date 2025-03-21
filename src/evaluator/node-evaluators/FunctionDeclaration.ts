import { FunctionDeclaration } from "@babel/types";
import StaticJsEnvironment from "../../environment/StaticJsEnvironment.js";
import functionNodeEvaluator from "./Function.js";

export default function functionDeclarationNodeEvaluator(
  node: FunctionDeclaration,
  env: StaticJsEnvironment,
) {
  const functionName = node.id?.name ?? null;
  const func = functionNodeEvaluator(functionName, node, env);

  if (functionName) {
    // So apparently you can actually redeclare these in NodeJS, so use 'let' instead of 'const'.
    env.currentScope.declareLetProperty(functionName, func);
  }

  return null;
}
