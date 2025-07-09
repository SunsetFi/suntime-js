import type { UpdateExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toString from "../../runtime/algorithms/to-string.js";
import toNumber from "../../runtime/algorithms/to-number.js";

import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObject.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import nameNode from "./name-node.js";

export default function* updateExpressionNodeEvaluator(
  node: UpdateExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const originalValue = yield* EvaluateNodeCommand(node.argument, context, {
    forNormalValue: "UpdateExpression.argument",
  });

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

  switch (node.argument.type) {
    case "Identifier":
      yield* context.env.setMutableBindingEvaluator(
        node.argument.name,
        setValue,
        context.strict,
      );
      break;
    case "MemberExpression": {
      const target = yield* EvaluateNodeCommand(node.argument.object, context, {
        forNormalValue: "UpdateExpression.argument object",
      });
      if (!isStaticJsObjectLike(target)) {
        throw new ThrowCompletion(
          context.realm.types.error(
            "TypeError",
            `Cannot read properties of ${target.runtimeTypeOf} (reading '${nameNode(node.argument.object)}')`,
          ),
        );
      }

      let propertyName: string;
      if (node.argument.computed) {
        let propValue = yield* EvaluateNodeCommand(
          node.argument.property,
          context,
          { forNormalValue: "UpdateExpression.argument property" },
        );
        propValue = yield* toString(propValue, context.realm);
        propertyName = propValue.value;
      } else if (node.argument.property.type === "Identifier") {
        propertyName = node.argument.property.name;
      } else {
        throw new StaticJsEngineError(
          `Unsupported property type in update expression: ${node.argument.property.type}.`,
        );
      }

      yield* target.setPropertyEvaluator(propertyName, setValue, false);
      break;
    }
  }

  return node.prefix ? setValue : originalValue;
}
