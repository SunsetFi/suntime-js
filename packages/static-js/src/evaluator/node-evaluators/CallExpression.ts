import { CallExpression } from "@babel/types";

import { isStaticJsFunction } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { NormalCompletion, ThrowCompletion } from "../completions/index.js";

import nameNode from "./name-node.js";

export default function* callExpressionNodeEvaluator(
  node: CallExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    // TODO: We can absolutely support these with the generator command stuff.
    throw new Error("Intrinsics are not supported");
  }

  let thisArg = yield* context.env.getThisBindingEvaluator();

  if (node.callee.type === "MemberExpression") {
    const object = yield* EvaluateNodeAssertValueCommand(
      node.callee.object,
      context,
    );
    thisArg = object;
  }

  const callee = yield* EvaluateNodeAssertValueCommand(node.callee, context);
  if (!isStaticJsFunction(callee)) {
    // FIXME: Use real error.
    return ThrowCompletion(
      context.realm.types.string(
        `Cannot call "${nameNode(node.callee)}": Not a function`,
      ),
    );
  }

  const args = new Array(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    args[i] = yield* EvaluateNodeAssertValueCommand(node.arguments[i], context);
  }

  const callCompletion = yield* callee.call(thisArg, ...args);

  switch (callCompletion.type) {
    case "normal":
      return NormalCompletion(null);
    case "return":
      return NormalCompletion(callCompletion.value);
    case "throw":
      return callCompletion;
    default:
      throw new Error("Unexpected completion type " + callCompletion.type);
  }
}
