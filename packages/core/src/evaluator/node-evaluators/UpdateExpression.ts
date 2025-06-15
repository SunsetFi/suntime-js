import type { UpdateExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsNumber } from "../../runtime/types/StaticJsNumber.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

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

  if (!isStaticJsNumber(originalValue)) {
    return context.realm.types.NaN;
  }

  let targetValue = originalValue.value;
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
