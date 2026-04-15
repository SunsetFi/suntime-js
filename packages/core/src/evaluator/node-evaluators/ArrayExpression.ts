import type { ArrayExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { arrayCreate } from "../../runtime/algorithms/array-create.js";
import { createDataPropertyOrThrow } from "../../runtime/algorithms/create-data-property-or-throw.js";
import { set } from "../../runtime/algorithms/set.js";
import { getIterator } from "../../runtime/iterators/get-iterator.js";
import { iteratorClose } from "../../runtime/iterators/iterator-close.js";
import { iteratorStepValue } from "../../runtime/iterators/iterator-step-value.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* arrayExpressionNodeEvaluator(node: ArrayExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const array = yield* arrayCreate(0);
  let nextIndex = 0;
  for (const element of node.elements) {
    if (!element) {
      const len = nextIndex + 1;
      yield* set(array, "length", realm.types.number(len), true);
      nextIndex = len;
      continue;
    }

    if (element.type === "SpreadElement") {
      const spreadObj = yield* Q.val(EvaluateNodeCommand(element.argument));
      const iteratorRecord = yield* getIterator(spreadObj, "sync");

      yield* iteratorClose.handle(iteratorRecord, function* () {
        while (true) {
          const next = yield* iteratorStepValue(iteratorRecord);
          if (!next) {
            break;
          }

          yield* createDataPropertyOrThrow(array, String(nextIndex), next);
          nextIndex++;
        }
      });
    } else {
      const initValue = yield* Q.val(EvaluateNodeCommand(element));
      yield* createDataPropertyOrThrow(array, String(nextIndex), initValue);
      nextIndex++;
    }
  }

  return array;
}
