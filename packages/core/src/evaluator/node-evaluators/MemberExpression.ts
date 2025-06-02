import type { MemberExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toPropertyKey from "../../runtime/types/utils/to-property-key.js";
import { isStaticJsNull } from "../../runtime/types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../runtime/types/StaticJsUndefined.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import nameNode from "./name-node.js";
import toObject from "../../runtime/algorithms/to-object.js";

export default function* memberExpressionNodeEvaluator(
  node: MemberExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const propertyNode = node.property;
  let target = yield* EvaluateNodeCommand(node.object, context, {
    forNormalValue: "MemberExpression.object",
  });

  if (isStaticJsNull(target)) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        `Cannot read properties of null (reading '${nameNode(propertyNode)}')`,
      ),
    );
  }

  if (isStaticJsUndefined(target)) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        `Cannot read properties of undefined (reading '${nameNode(propertyNode)}')`,
      ),
    );
  }

  // Perform boxing if needed.
  target = yield* toObject(target, context.realm);

  let propertyName: string;
  if (propertyNode.type === "PrivateName") {
    // TODO: Support private fields
    // We just need to know if the target is a 'this' and we are inside the class.
    // We don't even support classes yet.
    throw new StaticJsEngineError("Private fields are not supported");
  }

  if (!node.computed && propertyNode.type === "Identifier") {
    propertyName = propertyNode.name;
  } else {
    const property = yield* EvaluateNodeCommand(propertyNode, context, {
      forNormalValue: "MemberExpression.property",
    });
    propertyName = toPropertyKey(property);
  }

  const value = yield* target.getPropertyEvaluator(propertyName);
  return value;
}
