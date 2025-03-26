import { UpdateExpression } from "@babel/types";

import { isStaticJsNumber, StaticJsNumber } from "../../runtime/index.js";

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

  let originalValue = context.env.getBindingValue(
    bindingName,
    context.realm.strict,
  );

  if (!isStaticJsNumber(originalValue)) {
    return NormalCompletion(StaticJsNumber.NaN);
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

  context.env.setMutableBinding(
    bindingName,
    StaticJsNumber(targetValue),
    context.realm.strict,
  );

  return NormalCompletion(
    node.prefix ? StaticJsNumber(targetValue) : originalValue,
  );
}
