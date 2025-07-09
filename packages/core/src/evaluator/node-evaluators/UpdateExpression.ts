import type { UpdateExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";
import toNumber from "../../runtime/algorithms/to-number.js";

export default function* updateExpressionNodeEvaluator(
  node: UpdateExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let bindingName: string;
  if (node.argument.type === "Identifier") {
    bindingName = node.argument.name;
  } else {
    throw new StaticJsEngineError(
      `Unsupported argument type for update expression ${node.argument.type}`,
    );
  }

  const originalValue = yield* context.env.getBindingValueEvaluator(
    bindingName,
    context.strict,
  );

  // Note: NodeJs throws an error if the value is a string or something, but
  // thats not what the spec says to do!
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
  yield* context.env.setMutableBindingEvaluator(
    bindingName,
    setValue,
    context.strict,
  );

  return node.prefix ? setValue : originalValue;
}
