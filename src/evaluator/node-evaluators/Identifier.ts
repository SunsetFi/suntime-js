import { Identifier } from "@babel/types";

import {
  StaticJsEnvironment,
  StaticJsValue,
  StaticJsUndefined,
} from "../../environment/index.js";

export default function identifierNodeEvaluator(
  node: Identifier,
  env: StaticJsEnvironment,
): StaticJsValue {
  const scope = env.currentScope;

  if (!scope.hasProperty(node.name)) {
    // undefined is actually an identifier because of course it is.
    // Assume the default value, but let people override it I guess...
    if (node.name === "undefined") {
      return StaticJsUndefined();
    }

    throw new Error(`Identifier ${node.name} is not defined`);
  }

  return scope.getProperty(node.name);
}
