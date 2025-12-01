import type { UnaryExpression } from "@babel/types";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toPropertyKey from "../../runtime/utils/to-property-key.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";
import toNumber from "../../runtime/algorithms/to-number.js";
import toObject from "../../runtime/algorithms/to-object.js";

import { isStaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
import { isStaticJsSymbol } from "../../runtime/index.js";
import { isStaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import getValue from "../../runtime/algorithms/get-value.js";
import { isUnresolvableReference } from "../../runtime/references/is-unresolvable-reference.js";

export default function* unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.operator === "delete") {
    return yield* deleteExpressionNodeEvaluator(node, context);
  }

  if (node.operator === "typeof") {
    return yield* typeofExpressionNodeEvaluator(node, context);
  }

  // Note: In the case of 'void', this is never used.
  // But it still can have side-effects.
  const value = yield* EvaluateNodeCommand(node.argument, context, {
    forNormalValue: "UnaryExpression.argument",
  });

  const types = context.realm.types;
  switch (node.operator) {
    case "!": {
      const boolVal = yield* toBoolean.js(value, context.realm);
      return types.boolean(!boolVal);
    }
    // I'm reasonably sure native javascript converts these to number for these operations.
    // Typescript doesn't like it though, so let's cast it ourselves.
    case "-": {
      const numberValue = yield* toNumber(value, context.realm);
      return types.number(-numberValue.value);
    }
    case "+": {
      return yield* toNumber(value, context.realm);
    }
    case "~": {
      const numberValue = yield* toNumber(value, context.realm);
      return types.number(~numberValue.value);
    }
    case "void":
      return types.undefined;
    case "throw":
      throw new ThrowCompletion(value);
  }

  throw new StaticJsEngineError(`Unknown unary operator: ${node.operator}.`);
}

function* deleteExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const ref = yield* EvaluateNodeCommand(node.argument, context, {
    forReference: "UnaryExpression<delete>.argument",
  });

  if (isStaticJsValue(ref.base)) {
    const obj = yield* toObject(ref.base, context.realm);
    const propertyKey = yield* toPropertyKey(ref.referencedName, context.realm);
    const result = yield* obj.deleteEvaluator(propertyKey);
    return context.realm.types.boolean(result);
  } else if (ref.base) {
    const env = ref.base as StaticJsEnvironmentRecord;
    const name = ref.referencedName;

    // TODO: Spec doesn't show this, but we don't suport symbols in env records.
    // This needs to be resolved...
    if (isStaticJsSymbol(name)) {
      return context.realm.types.true;
    }

    if (!(yield* env.hasBindingEvaluator(name))) {
      return context.realm.types.true;
    }

    const deleted = yield* env.deleteBindingEvaluator(name);
    if (!deleted && context.strict) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "ReferenceError",
          `Cannot delete binding ${name}: Binding does not exist.`,
        ),
      );
    }

    return context.realm.types.boolean(deleted);
  }

  // ???
  // `delete 4` returns true???
  return context.realm.types.true;
}

function* typeofExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const argument = node.argument;
  let value = yield* EvaluateNodeCommand(argument, context);

  if (isStaticJsReferenceRecord(value)) {
    if (isUnresolvableReference(value)) {
      return context.realm.types.string("undefined");
    }

    value = yield* getValue(value, context.realm);
  }

  if (isStaticJsValue(value)) {
    return context.realm.types.string(value.typeOf);
  } else {
    return context.realm.types.string("undefined");
  }
}
