import { Identifier } from "@babel/types";

import { StaticJsEnvironment, StaticJsValue } from "../../environment/index.js";

export default function identifierNodeEvaluator(
  node: Identifier,
  env: StaticJsEnvironment,
): StaticJsValue {
  const scope = env.currentScope;

  if (!scope.hasProperty(node.name)) {
    throw new Error(`Identifier ${node.name} is not defined`);
  }

  return scope.getProperty(node.name);
}
