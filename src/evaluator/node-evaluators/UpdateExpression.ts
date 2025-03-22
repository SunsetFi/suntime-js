import { UpdateExpression } from "@babel/types";

import { isStaticJsNumber, StaticJsNumber } from "../../runtime/index.js";

import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function updateExpressionNodeEvaluator(
  node: UpdateExpression,
  context: NodeEvaluationContext,
) {
  let bindingName: string;
  if (node.argument.type === "Identifier") {
    bindingName = node.argument.name;
  } else {
    throw new Error("Unsupported argument type for update expression");
  }

  // TODO: env strictness.
  let originalValue = context.env.getBindingValue(bindingName, true);

  if (!isStaticJsNumber(originalValue)) {
    return StaticJsNumber.NaN;
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

  return node.prefix ? StaticJsNumber(targetValue) : originalValue;
}
