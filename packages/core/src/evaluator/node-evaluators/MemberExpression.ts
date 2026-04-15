import type { MemberExpression } from "@babel/types";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { StaticJsPrivateName } from "../../runtime/types/StaticJsPrivateName.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* memberExpressionNodeEvaluator(
  node: MemberExpression,
): EvaluationGenerator {
  const { strict } = EvaluationContext.current;
  const target = yield* Q.val(EvaluateNodeCommand(node.object));

  const propertyNode = node.property;

  let propertyKey: string | StaticJsPrivateName | StaticJsValue;
  if (propertyNode.type === "PrivateName") {
    const { privateEnv } = EvaluationContext.current;
    if (!privateEnv) {
      throw new StaticJsEngineError(
        "Assertion failure: PrivateName found in context that lacks a privateEnv",
      );
    }
    const privateName = privateEnv.resolvePrivateIdentifier(propertyNode.id.name);
    return {
      base: target,
      referencedName: privateName,
      strict: true,
      thisValue: null,
    };
  }

  if (!node.computed && propertyNode.type === "Identifier") {
    propertyKey = propertyNode.name;
  } else {
    // Do NOT cast this to string yet!
    // Assignment requires us to not compute this until after the rhs is computed.
    propertyKey = yield* Q.val(EvaluateNodeCommand(propertyNode));
  }

  return {
    referencedName: propertyKey,
    strict,
    base: target,
    thisValue: target,
  } satisfies StaticJsReferenceRecord;
}
