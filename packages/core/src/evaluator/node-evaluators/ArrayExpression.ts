import type { ArrayExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import getIterator from "../../runtime/iterators/get-iterator.js";
import iteratorStepValue from "../../runtime/iterators/iterator-step-value.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
import iteratorClose from "../../runtime/iterators/iterator-close.js";

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
      const spreadValue = yield* Q.val(
        EvaluateNodeCommand(element.argument, context),
        context.realm,
      );

      const iterator = yield* getIterator(spreadValue, "sync", context.realm);

      yield* iteratorClose.handle(iterator, context.realm, function* () {
        while (true) {
          const value = yield* iteratorStepValue(iterator, context.realm);
          if (!value) {
            break;
          }

          items.push(value);
        }
      });
    } else {
      const value = yield* Q.val(EvaluateNodeCommand(element, context), context.realm);
      items.push(value);
    }
  }

  return context.realm.types.array(items);
}
