import { UpdateExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsNumber } from "../../runtime/types/StaticJsNumber.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

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
    context.realm.strict,
  );
  if (isThrowCompletion(originalValue)) {
    return originalValue;
  }

  if (!isStaticJsNumber(originalValue)) {
    return NormalCompletion(context.realm.types.NaN);
  }

  let targetValue = originalValue.toJs() as number;
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
  const result = yield* context.env.setMutableBindingEvaluator(
    bindingName,
    setValue,
    context.realm.strict,
  );
  if (isThrowCompletion(result)) {
    return result;
  }

  return NormalCompletion(node.prefix ? setValue : originalValue);
}
