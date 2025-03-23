import { MemberExpression } from "@babel/types";

import { isStaticJsObjectLike, StaticJsObject } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";

export default function* memberExpressionNodeEvaluator(
  node: MemberExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const target = yield* EvaluateNodeAssertValueCommand(node.object, context);
  if (!isStaticJsObjectLike(target)) {
    let postfix: string = "";
    if (node.object.type === "Identifier") {
      postfix = ` (Accessing ${node.object.name})`;
    }
    throw new Error(`Cannot access property of non-object value` + postfix);
  }

  const propertyNode = node.property;
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
    propertyName = StaticJsObject.toPropertyKey(resolved);
  }

  return target.getProperty(propertyName);
}
