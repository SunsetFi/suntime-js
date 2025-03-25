import { CallExpression } from "@babel/types";

import { isStaticJsFunction } from "../../runtime/internal.js";
import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";

export default function* callExpressionNodeEvaluator(
  node: CallExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    throw new Error("Intrinsics are not supported");
  }

  const callee = yield* EvaluateNodeCommand(node.callee, context);
  if (!isStaticJsFunction(callee)) {
    const calleeName =
      node.callee.type === "Identifier" ? node.callee.name : "<expression>";
    throw new Error(`Cannot call \"${calleeName}\": Not a function`);
  }

  const args = new Array(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    args[i] = yield* EvaluateNodeCommand(node.arguments[i], context);
  }
  const result = yield* callee.call(context.env.getThisBinding(), ...args);
  return result;
}
