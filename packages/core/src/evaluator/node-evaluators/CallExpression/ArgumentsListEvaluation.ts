import { CallExpression } from "@babel/types";

import { getIterator } from "../../../runtime/iterators/get-iterator.js";
import { iteratorClose } from "../../../runtime/iterators/iterator-close.js";
import { iteratorStepValue } from "../../../runtime/iterators/iterator-step-value.js";
import { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";
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
