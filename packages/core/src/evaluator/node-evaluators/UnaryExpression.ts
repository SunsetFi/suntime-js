import type { UnaryExpression } from "@babel/types";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toPropertyKey from "../../runtime/utils/to-property-key.js";

import { isStaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import { isUnresolvableReference } from "../../runtime/references/is-unresolvable-reference.js";
import { isPropertyReference } from "../../runtime/references/is-property-reference.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import toNumber from "../../runtime/algorithms/to-number.js";
import toObject from "../../runtime/algorithms/to-object.js";
import getValue from "../../runtime/algorithms/get-value.js";

import { isStaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

export default function* unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;

  if (node.operator === "delete") {
    return yield* deleteExpressionNodeEvaluator(node, context);
  }

  if (node.operator === "typeof") {
    return yield* typeofExpressionNodeEvaluator(node, context);
  }

  // Note: In the case of 'void', this is never used.
  // But it still can have side-effects.
  const value = yield* Q.val(EvaluateNodeCommand(node.argument));

  const types = context.realm.types;
  switch (node.operator) {
    case "!": {
      const boolVal = yield* toBoolean.js(value);
      return types.boolean(!boolVal);
    }
    // I'm reasonably sure native javascript converts these to number for these operations.
    // Typescript doesn't like it though, so let's cast it ourselves.
    case "-": {
      const numberValue = yield* toNumber(value, realm);
      return types.number(-numberValue.value);
    }
    case "+": {
      return yield* toNumber(value, realm);
    }
    case "~": {
      const numberValue = yield* toNumber(value, realm);
      return types.number(~numberValue.value);
    }
    case "void":
      return types.undefined;
    case "throw":
      throw Completion.Throw(value);
  }

  throw new StaticJsEngineError(`Unknown unary operator: ${node.operator}.`);
}

function* deleteExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const ref = yield* Q(EvaluateNodeCommand(node.argument));

  if (!isStaticJsReferenceRecord(ref)) {
    return realm.types.true;
  }

  if (isUnresolvableReference(ref)) {
    return realm.types.true;
  }

  if (isPropertyReference(ref)) {
    // TODO: if is super reference, throw.
    const baseObj = yield* toObject(ref.base);
    const propertyKey = yield* toPropertyKey(ref.referencedName);
    const result = yield* baseObj.deleteEvaluator(propertyKey);
    if (!result && context.strict) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          `Cannot delete property ${String(propertyKey)} of object: Property is non-configurable.`,
        ),
      );
    }
    return realm.types.boolean(result);
  } else {
    const base = ref.base;
    const result = yield* base.deleteBindingEvaluator(ref.referencedName);
    return realm.types.boolean(result);
  }
}

function* typeofExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  const argument = node.argument;
  let value = yield* Q(EvaluateNodeCommand(argument));
  if (isStaticJsReferenceRecord(value)) {
    if (isUnresolvableReference(value)) {
      return realm.types.string("undefined");
    }

    value = yield* getValue(value);
  }

  if (isStaticJsValue(value)) {
    return realm.types.string(value.typeOf);
  } else {
    return realm.types.string("undefined");
  }
}
