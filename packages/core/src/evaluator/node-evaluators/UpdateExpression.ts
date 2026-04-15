import type { UpdateExpression } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import getValue from "../../runtime/algorithms/get-value.js";
import putValue from "../../runtime/algorithms/put-value.js";
import toNumber from "../../runtime/algorithms/to-number.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* updateExpressionNodeEvaluator(
  node: UpdateExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const ref = yield* Q.ref(EvaluateNodeCommand(node.argument));

  // Note: NodeJs throws an error if the value is a string or something, but
  // thats not what the spec says to do!
  const refValue = yield* getValue(ref);

  const oldValue = yield* toNumber(refValue);

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

  yield* putValue(ref, newValue);

  return node.prefix ? newValue : oldValue;
}
