import { Identifier } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../../environment/index.js";
import StaticJsUndefined from "../../environment/types/factories/StaticJsUndefined.js";

export default function identifierNodeEvaluator(
  node: Identifier,
  scope: StaticJsScope,
): StaticJsValue {
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
