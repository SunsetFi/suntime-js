import type { MemberExpression } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { getSuperBase } from "../../runtime/algorithms/get-super-base.js";
import { getThisEnvironment } from "../../runtime/algorithms/get-this-environment.js";
import {
  StaticJsPropertyReferenceRecord,
  staticJsPropertyReferenceRecord,
} from "../../runtime/references/StaticJsReferenceRecord.js";
import { StaticJsPrivateName } from "../../runtime/types/StaticJsPrivateName.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* memberExpressionNodeEvaluator(
  node: MemberExpression,
): EvaluationGenerator {
  if (node.object.type === "Super") {
    return yield* superMemberExpressionNodeEvaluator(node);
  }

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

function* superMemberExpressionNodeEvaluator(node: MemberExpression): EvaluationGenerator {
  if (node.computed) {
    return yield* superComputedMemberExpressionNodeEvaluator(node);
  }

  const env = yield* getThisEnvironment();
  const actualThis = yield* Q(env.getThisBindingEvaluator());
  const propertyKey =
    node.property.type === "Identifier"
      ? node.property.name
      : yield* Q.val(EvaluateNodeCommand(node.property));

  const { strict } = EvaluationContext.current;

  // MakeSuperPropertyReference
  // const env = yield* getThisEnvironment();
  const baseValue = yield* env.getSuperBaseEvaluator();
  return staticJsPropertyReferenceRecord(baseValue, propertyKey, strict, actualThis);
}

function* superComputedMemberExpressionNodeEvaluator(
  node: MemberExpression,
): EvaluationGenerator<StaticJsPropertyReferenceRecord> {
  const env = yield* getThisEnvironment();
  const actualThis = yield* Q(env.getThisBindingEvaluator());
  const propertyNameValue = yield* Q.val(EvaluateNodeCommand(node.property));

  const { strict } = EvaluationContext.current;

  // MakeSuperPropertyReference
  const baseValue = yield* getSuperBase(env);
  return staticJsPropertyReferenceRecord(baseValue, propertyNameValue, strict, actualThis);
}
