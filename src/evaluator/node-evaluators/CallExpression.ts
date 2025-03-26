import { CallExpression } from "@babel/types";

import { isStaticJsFunction } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { NormalCompletion } from "../internal.js";

export default function* callExpressionNodeEvaluator(
  node: CallExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    // TODO: We can absolutely support these with the generator command stuff.
    throw new Error("Intrinsics are not supported");
  }

  const callee = yield* EvaluateNodeAssertValueCommand(node.callee, context);
  if (!isStaticJsFunction(callee)) {
    const calleeName =
      node.callee.type === "Identifier" ? node.callee.name : "<expression>";
    throw new Error(`Cannot call "${calleeName}": Not a function`);
  }

  const args = new Array(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    args[i] = yield* EvaluateNodeAssertValueCommand(node.arguments[i], context);
  }

  const callCompletion = yield* callee.call(
    context.env.getThisBinding(),
    ...args,
  );

  switch (callCompletion.type) {
    case "normal":
      return NormalCompletion();
    case "return":
      return NormalCompletion(callCompletion.value);
    case "throw":
      return callCompletion;
    default:
      throw new Error("Unexpected completion type " + callCompletion.type);
  }
}
