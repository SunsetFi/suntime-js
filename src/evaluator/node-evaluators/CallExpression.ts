import { CallExpression } from "@babel/types";

import StaticJsEnvironment from "../../environment/StaticJsEnvironment.js";

import { evaluateNode, evaluateNodeAssertValue } from "./evaluate-node.js";
import { isStaticJsFunction } from "../../environment/index.js";

export default function callExpressionNodeEvaluator(
  node: CallExpression,
  env: StaticJsEnvironment,
) {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    throw new Error("Intrinsics are not supported");
  }

  const callee = evaluateNode(node.callee, env);
  if (!isStaticJsFunction(callee)) {
    const calleeName =
      node.callee.type === "Identifier" ? node.callee.name : "<expression>";
    throw new Error(`Cannot call \"${calleeName}\": Not a function`);
  }

  const args = node.arguments.map((arg) => evaluateNodeAssertValue(arg, env));

  return callee.evaluate(env, ...args);
}
