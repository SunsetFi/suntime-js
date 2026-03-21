import type { UpdateExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toNumber from "../../runtime/algorithms/to-number.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import getValue from "../../runtime/algorithms/get-value.js";
import putValue from "../../runtime/algorithms/put-value.js";

export default function* updateExpressionNodeEvaluator(
  node: UpdateExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const ref = yield* Q.ref(EvaluateNodeCommand(node.argument));

  // Note: NodeJs throws an error if the value is a string or something, but
  // thats not what the spec says to do!
  const refValue = yield* getValue(ref, realm);

  const oldValue = yield* toNumber(refValue, realm);

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

  const newValue = realm.types.number(newValueJs);

  yield* putValue(ref, newValue, realm);

  return node.prefix ? newValue : oldValue;
}
