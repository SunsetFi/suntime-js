import { MemberExpression } from "@babel/types";

import toPropertyKey from "../../runtime/types/utils/to-property-key.js";
import { isStaticJsNull } from "../../runtime/types/interfaces/StaticJsNull.js";
import { isStaticJsUndefined } from "../../runtime/types/interfaces/StaticJsUndefined.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { NormalCompletion, ThrowCompletion } from "../completions/index.js";

import nameNode from "./name-node.js";

export default function* memberExpressionNodeEvaluator(
  node: MemberExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const propertyNode = node.property;
  let target = yield* EvaluateNodeAssertValueCommand(node.object, context);

  if (isStaticJsNull(target)) {
    // FIXME: Use real error.
    return ThrowCompletion(
      context.realm.types.string(
        `Cannot read properties of null (reading '${nameNode(propertyNode)}')`,
      ),
    );
  }

  if (isStaticJsUndefined(target)) {
    // FIXME: Use real error.
    return ThrowCompletion(
      context.realm.types.string(
        `Cannot read properties of undefined (reading '${nameNode(propertyNode)}')`,
      ),
    );
  }

  // Perform boxing if needed.
  target = target.toObject();

  let propertyName: string;
  if (propertyNode.type === "PrivateName") {
    // TODO: Support private fields
    // We just need to know if the target is a 'this' and we are inside the class.
    // We don't even support classes yet.
    throw new Error("Private fields are not supported");
  }

  if (!node.computed && propertyNode.type === "Identifier") {
    propertyName = propertyNode.name;
  } else {
    const resolved = yield* EvaluateNodeAssertValueCommand(
      propertyNode,
      context,
    );
    propertyName = toPropertyKey(resolved);
  }

  const value = yield* target.getPropertyEvaluator(propertyName);
  return NormalCompletion(value);
}
