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
  const { realm } = context;
  const items: StaticJsValue[] = [];
  for (const element of node.elements) {
    if (!element) {
      items.length++;
      continue;
    }

    if (element.type === "SpreadElement") {
      const spreadValue = yield* Q.val(EvaluateNodeCommand(element.argument), context.realm);

      const iterator = yield* getIterator(spreadValue, "sync", realm);

      yield* iteratorClose.handle(iterator, context.realm, function* () {
        while (true) {
          const value = yield* iteratorStepValue(iterator, realm);
          if (!value) {
            break;
          }

          items.push(value);
        }
      });
    } else {
      const value = yield* Q.val(EvaluateNodeCommand(element), realm);
      items.push(value);
    }
  }

  return realm.types.array(items);
}
