import type { OptionalMemberExpression, PrivateName } from "@babel/types";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { staticJsPropertyReferenceRecord } from "#references/StaticJsReferenceRecord.js";
import { isStaticJsNull } from "#types/StaticJsNull.js";
import type { StaticJsPrivateName } from "#types/StaticJsPrivateName.js";
import { isStaticJsUndefined } from "#types/StaticJsUndefined.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Q } from "../../completions/Q.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* optionalMemberExpressionNodeEvaluator(
  node: OptionalMemberExpression,
): EvaluationGenerator {
  const { strict, realm } = EvaluationContext.current;
  const target = yield* Q.val(EvaluateNodeCommand(node.object));
  if (isStaticJsUndefined(target) || isStaticJsNull(target)) {
    return realm.types.undefined;
  }

  const propertyNode = node.property;

  // test262 says this is a thing but babel parser hasn't caught up yet.
  let propertyKey: string | StaticJsPrivateName | StaticJsValue;
  if ((propertyNode.type as any) === "PrivateName") {
    const propertyPrivateName = propertyNode as any as PrivateName;
    const { privateEnv } = EvaluationContext.current;
    if (!privateEnv) {
      throw new StaticJsEngineError(
        "Assertion failure: PrivateName found in context that lacks a privateEnv",
      );
    }
    const privateName = privateEnv.resolvePrivateIdentifier("#" + propertyPrivateName.id.name);
    return staticJsPropertyReferenceRecord(target, privateName, true);
  }

  if (!node.computed && propertyNode.type === "Identifier") {
    propertyKey = propertyNode.name;
  } else {
    // Do NOT cast this to string yet!
    // Assignment requires us to not compute this until after the rhs is computed.
    propertyKey = yield* Q.val(EvaluateNodeCommand(propertyNode));
  }

  return staticJsPropertyReferenceRecord(target, propertyKey, strict, target);
}
