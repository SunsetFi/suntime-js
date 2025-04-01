import { UpdateExpression } from "@babel/types";

import { isStaticJsNumber } from "../../runtime/types/interfaces/StaticJsNumber.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

export default function* updateExpressionNodeEvaluator(
  node: UpdateExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let bindingName: string;
  if (node.argument.type === "Identifier") {
    bindingName = node.argument.name;
  } else {
    throw new Error("Unsupported argument type for update expression");
  }

  const originalValue = yield* context.env.getBindingValueEvaluator(
    bindingName,
    context.realm.strict,
  );

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
      throw new Error(
        `Unsupported operator for update expression ${node.operator}.`,
      );
  }

  const setValue = context.realm.types.number(targetValue);
  yield* context.env.setMutableBindingEvaluator(
    bindingName,
    setValue,
    context.realm.strict,
  );

  return NormalCompletion(node.prefix ? setValue : originalValue);
}
