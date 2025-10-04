import type { CallExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import nameNode from "./name-node.js";

export default function* callExpressionNodeEvaluator(
  node: CallExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.callee.type === "V8IntrinsicIdentifier") {
    // TODO: We can absolutely support these with the generator command stuff.
    throw new StaticJsEngineError("Intrinsics are not supported");
  }

  // This is suprising, but we pass undefined if we have none.
  // The function itself decides what to and (maybe) inherits globalThis when undefined is passed.
  let thisArg: StaticJsValue = context.realm.types.undefined;

  if (node.callee.type === "MemberExpression") {
    thisArg = yield* EvaluateNodeCommand(node.callee.object, context, {
      forNormalValue: "CallExpression.callee.object",
    });
  }

  const callee = yield* EvaluateNodeCommand(node.callee, context, {
    forNormalValue: "CallExpression.callee",
  });

  if (!isStaticJsFunction(callee)) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        `TypeError: ${nameNode(node.callee)} is not a function`,
      ),
    );
  }

  const args: StaticJsValue[] = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const argument = node.arguments[i];
    if (argument.type === "SpreadElement") {
      const iterable = yield* EvaluateNodeCommand(argument.argument, context, {
        forNormalValue: "ForInStatement.right",
      });

      if (!isStaticJsObjectLike(iterable)) {
        // NodeJS seems to stringify the value in place of 'Value'.  Maybe.  It returns {} when {} is used?
        throw new ThrowCompletion(
          context.realm.types.error("TypeError", "Value is not iterable"),
        );
      }

      const iteratorFunc = yield* iterable.getPropertyEvaluator(
        context.realm.types.symbols.iterator,
      );
      if (!isStaticJsFunction(iteratorFunc)) {
        throw new ThrowCompletion(
          context.realm.types.error("TypeError", "Value is not iterable"),
        );
      }

      const iterator = yield* iteratorFunc.callEvaluator(iterable);
      if (!isStaticJsObjectLike(iterator)) {
        throw new ThrowCompletion(
          context.realm.types.error(
            "TypeError",
            "Result of the Symbol.iterator method is not an object",
          ),
        );
      }

      while (true) {
        const nextMethod = yield* iterator.getPropertyEvaluator("next");
        if (!isStaticJsFunction(nextMethod)) {
          throw new ThrowCompletion(
            context.realm.types.error("TypeError", "next is not a function"),
          );
        }

        const next = yield* nextMethod.callEvaluator(iterator);
        if (!isStaticJsObjectLike(next)) {
          throw new ThrowCompletion(
            context.realm.types.error(
              "TypeError",
              "Result of next is not an object",
            ),
          );
        }

        const done = yield* next.getPropertyEvaluator("done");
        const doneResult = yield* toBoolean(done, context.realm);
        if (doneResult.value) {
          break;
        }

        const value = yield* next.getPropertyEvaluator("value");
        args.push(value);
      }
    } else {
      const arg = yield* EvaluateNodeCommand(argument, context, {
        forNormalValue: "CallExpression.arguments[]",
      });
      args.push(arg);
    }
  }

  const callResult = yield* callee.callEvaluator(thisArg, ...args);

  return callResult ?? context.realm.types.undefined;
}
