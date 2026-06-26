import type { CallExpression } from "@babel/types";

import type { StaticJsValue } from "#types/StaticJsValue.js";

import { getIterator } from "#iterators/get-iterator.js";
import { iteratorClose } from "#iterators/iterator-close.js";
import { iteratorStepValue } from "#iterators/iterator-step-value.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Q } from "../../completions/Q.js";
import { EvaluationGenerator } from "../../EvaluationGenerator.js";

export function* argumentsListEvaluation(
  callArguiments: CallExpression["arguments"],
): EvaluationGenerator<StaticJsValue[]> {
  const resultArguments: StaticJsValue[] = [];

  for (let i = 0; i < callArguiments.length; i++) {
    const argument = callArguiments[i];
    if (argument.type === "SpreadElement") {
      const iterable = yield* Q.val(EvaluateNodeCommand(argument.argument));

      const iterator = yield* getIterator(iterable, "sync");

      yield* iteratorClose.handle(iterator, function* () {
        while (true) {
          const value = yield* iteratorStepValue(iterator);
          if (!value) {
            break;
          }
          resultArguments.push(value);
        }
      });
    } else {
      const arg = yield* Q.val(EvaluateNodeCommand(argument));
      resultArguments.push(arg);
    }
  }

  return resultArguments;
}
