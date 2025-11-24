import type { UpdateExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toNumber from "../../runtime/algorithms/to-number.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import getValue from "../algorithms/get-value.js";
import putValue from "../algorithms/put-value.js";

export default function* updateExpressionNodeEvaluator(
  node: UpdateExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const ref = yield* EvaluateNodeCommand(node.argument, context, {
    forReference: "UpdateExpression.argument",
  });

  // Note: NodeJs throws an error if the value is a string or something, but
  // thats not what the spec says to do!
  const originalValue = yield* getValue(ref, context.realm);
  const asNumber = yield* toNumber(originalValue, context.realm);

  let targetValue = asNumber.value;
  switch (node.operator) {
    case "++":
      targetValue++;
      break;
    case "--":
      targetValue--;
      break;
    default:
      throw new StaticJsEngineError(
        `Unsupported operator for update expression ${node.operator}.`,
      );
  }

  const setValue = context.realm.types.number(targetValue);

  yield* putValue(ref, setValue, context.realm);

  return node.prefix ? setValue : originalValue;
}
