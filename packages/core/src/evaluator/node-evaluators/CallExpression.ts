import { CallExpression } from "@babel/types";

import { isStaticJsFunction, StaticJsValue } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
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
    const calleeObjectResult = yield* EvaluateNodeCommand(
      node.callee.object,
      context,
    );
    switch (calleeObjectResult.type) {
      case "throw":
        return calleeObjectResult;
      case "normal":
        if (!calleeObjectResult.value) {
          throw new Error(
            "Expected callee member expression normal completion to return a value, but got undefined",
          );
        }
        thisArg = calleeObjectResult.value;
        break;
      default:
        throw new Error(
          "Expected callee memebr expression object to return throw or normal completion, but got " +
            calleeObjectResult.type,
        );
    }
  }

  const calleeCompletion = yield* EvaluateNodeCommand(node.callee, context);
  let callee: StaticJsValue;
  switch (calleeCompletion.type) {
    case "throw":
      return calleeCompletion;
    case "normal":
      if (!calleeCompletion.value) {
        throw new Error(
          "Expected callee completion to return a value, but got undefined",
        );
      }
      callee = calleeCompletion.value;
      break;
    default:
      throw new Error(
        "Expected callee completion to return throw or normal completion, but got " +
          calleeCompletion.type,
      );
  }
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
    const argCompletion = yield* EvaluateNodeCommand(
      node.arguments[i],
      context,
    );
    if (argCompletion.type === "throw") {
      return argCompletion;
    }
    if (argCompletion.type !== "normal" || !argCompletion.value) {
      throw new Error(
        `Expected argument completion to return a value, but got ${argCompletion.type}`,
      );
    }
    args[i] = argCompletion.value;
  }

  const callCompletion = yield* callee.call(thisArg, ...args);

  switch (callCompletion.type) {
    case "normal":
      return NormalCompletion(
        callCompletion.value ?? context.realm.types.undefined,
      );
    case "throw":
      return callCompletion;
    default:
      throw new Error("Unexpected completion type " + callCompletion.type);
  }
}
