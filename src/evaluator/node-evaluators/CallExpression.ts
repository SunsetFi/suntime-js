import { CallExpression } from "@babel/types";

import { isStaticJsFunction } from "../../runtime/index.js";

import { evaluateNode, evaluateNodeAssertValue } from "./nodes.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function callExpressionNodeEvaluator(
  node: CallExpression,
  context: NodeEvaluationContext,
) {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    throw new Error("Intrinsics are not supported");
  }

  const callee = evaluateNode(node.callee, context);
  if (!isStaticJsFunction(callee)) {
    const calleeName =
      node.callee.type === "Identifier" ? node.callee.name : "<expression>";
    throw new Error(`Cannot call \"${calleeName}\": Not a function`);
  }

  const args = node.arguments.map((arg) =>
    evaluateNodeAssertValue(arg, context),
  );
  return callee.call(context.env.getThisBinding(), ...args);
}
