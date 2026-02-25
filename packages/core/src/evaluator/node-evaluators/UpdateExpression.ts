import type { UpdateExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toNumber from "../../runtime/algorithms/to-number.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import getValue from "../../runtime/algorithms/get-value.js";
import putValue from "../../runtime/algorithms/put-value.js";

export default function* updateExpressionNodeEvaluator(
  node: UpdateExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const ref = yield* EvaluateNodeCommand(node.argument, context, {
    forReference: "UpdateExpression.argument",
  });

  // Note: NodeJs throws an error if the value is a string or something, but
  // thats not what the spec says to do!
  const refValue = yield* getValue(ref, context.realm);

  const oldValue = yield* toNumber(refValue, context.realm);

  let newValueJs = oldValue.value;
  switch (node.operator) {
    case "++":
      newValueJs++;
      break;
    case "--":
      newValueJs--;
      break;
    default:
      throw new StaticJsEngineError(`Unsupported operator for update expression ${node.operator}.`);
  }

  const newValue = context.realm.types.number(newValueJs);

  yield* putValue(ref, newValue, context.realm);

  return node.prefix ? newValue : oldValue;
}
