import { OptionalMemberExpression, PrivateName } from "@babel/types";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { staticJsPropertyReferenceRecord } from "../../../runtime/references/StaticJsReferenceRecord.js";
import { isStaticJsNull } from "../../../runtime/types/StaticJsNull.js";
import { StaticJsPrivateName } from "../../../runtime/types/StaticJsPrivateName.js";
import { isStaticJsUndefined } from "../../../runtime/types/StaticJsUndefined.js";
import { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";
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
