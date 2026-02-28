import type { MemberExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* memberExpressionNodeEvaluator(
  node: MemberExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const target = yield* Q.val(EvaluateNodeCommand(node.object, context), context.realm);

  const propertyNode = node.property;

  let propertyKey: StaticJsValue;
  if (propertyNode.type === "PrivateName") {
    // TODO: Support private fields
    // We just need to know if the target is a 'this' and we are inside the class.
    // We don't even support classes yet.
    throw new StaticJsEngineError("Private fields are not supported");
  }

  if (!node.computed && propertyNode.type === "Identifier") {
    propertyKey = context.realm.types.string(propertyNode.name);
  } else {
    // Do NOT cast this to string yet!
    // Assignment requires us to not compute this until after the rhs is computed.
    propertyKey = yield* Q.val(EvaluateNodeCommand(propertyNode, context), context.realm);
  }

  return {
    referencedName: propertyKey,
    strict: context.strict,
    base: target,
    thisValue: target,
  } satisfies StaticJsReferenceRecord;
}
