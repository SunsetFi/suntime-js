import { CallExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";
import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import nameNode from "./name-node.js";

export default function* callExpressionNodeEvaluator(
  node: CallExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    // TODO: We can absolutely support these with the generator command stuff.
    throw new StaticJsEngineError("Intrinsics are not supported");
  }

  let thisArg = yield* context.env.getThisBindingEvaluator();

  if (node.callee.type === "MemberExpression") {
    thisArg = yield* EvaluateNodeCommand(node.callee.object, context, {
      rethrow: true,
      forNormalValue: "CallExpression.callee.object",
    });
  }

  const callee = yield* EvaluateNodeCommand(node.callee, context, {
    rethrow: true,
    forNormalValue: "CallExpression.callee",
  });

  if (!isStaticJsFunction(callee)) {
    return ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        `TypeError: ${nameNode(node.callee)} is not a function`,
      ),
    );
  }

  const args = new Array(node.arguments.length);
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = yield* EvaluateNodeCommand(node.arguments[i], context, {
      rethrow: true,
      forNormalValue: "CallExpression.arguments[]",
    });
    args[i] = arg;
  }

  const callCompletion = yield* callee.callEvaluator(thisArg, ...args);
  if (callCompletion.type === "throw") {
    return callCompletion;
  }
  if (callCompletion.type !== "normal") {
    throw new StaticJsEngineError(
      `Expected call completion to return normal completion, but got ${callCompletion.type}`,
    );
  }

  return NormalCompletion(
    callCompletion.value ?? context.realm.types.undefined,
  );
}
