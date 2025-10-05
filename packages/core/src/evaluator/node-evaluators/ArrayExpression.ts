import type { ArrayExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import getIterator from "../../runtime/algorithms/get-iterator.js";
import iteratorStepValue from "../../runtime/algorithms/iterator-step-value.js";

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

      const iterator = yield* getIterator(spreadValue, context.realm);

      while (true) {
        const value = yield* iteratorStepValue(iterator, context.realm);
        if (value === false) {
          break;
        }

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
