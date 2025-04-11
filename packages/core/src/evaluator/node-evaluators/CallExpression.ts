import { CallExpression } from "@babel/types";

import { isStaticJsFunction } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import { NormalCompletion, ThrowCompletion } from "../completions/index.js";

import nameNode from "./name-node.js";
import StaticJsEngineError from "../StaticJsEngineError.js";

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
    const calleeObjectResult = yield* EvaluateNodeCommand(
      node.callee.object,
      context,
    );
    switch (calleeObjectResult.type) {
      case "throw":
        return calleeObjectResult;
      case "normal":
        if (!calleeObjectResult.value) {
          throw new StaticJsEngineError(
            "Expected callee member expression normal completion to return a value, but got undefined",
          );
        }
        thisArg = calleeObjectResult.value;
        break;
      default:
        throw new StaticJsEngineError(
          "Expected callee memebr expression object to return throw or normal completion, but got " +
            calleeObjectResult.type,
        );
    }
  }

  const callee = yield* EvaluateNodeCommand(node.callee, context, {
    rethrow: true,
    forNormalValue: "CallExpression.callee",
  });

  if (!isStaticJsFunction(callee)) {
    // FIXME: Use real error.
    return ThrowCompletion(
      context.realm.types.string(
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

  const callCompletion = yield* callee.call(thisArg, ...args);
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
