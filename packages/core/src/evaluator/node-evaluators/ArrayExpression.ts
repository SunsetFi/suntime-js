import type { ArrayExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

export default function* arrayExpressionNodeEvaluator(
  node: ArrayExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const items: StaticJsValue[] = [];
  for (const element of node.elements) {
    if (!element) {
      items.length++;
      continue;
    }

    if (element.type === "SpreadElement") {
      const spreadValue = yield* EvaluateNodeCommand(
        element.argument,
        context,
        {
          forNormalValue: "ArrayExpression.elements[].argument",
        },
      );

      if (!isStaticJsObjectLike(spreadValue)) {
        // NodeJS seems to stringify the value in place of 'Value'.  Maybe.  It returns {} when {} is used?
        throw new ThrowCompletion(
          context.realm.types.error("TypeError", "Value is not iterable"),
        );
      }

      const iteratorFunc = yield* spreadValue.getPropertyEvaluator(
        context.realm.types.symbols.iterator,
      );
      if (!isStaticJsFunction(iteratorFunc)) {
        throw new ThrowCompletion(
          context.realm.types.error("TypeError", "Value is not iterable"),
        );
      }

      const iterator = yield* iteratorFunc.callEvaluator(spreadValue);
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
        items.push(value);
      }
    } else {
      const value = yield* EvaluateNodeCommand(element, context, {
        forNormalValue: "ArrayExpression.elements[]",
      });
      items.push(value);
    }
  }

  return context.realm.types.array(items);
}
