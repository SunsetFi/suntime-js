import type { UnaryExpression } from "@babel/types";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObject.js";
import toPropertyKey from "../../runtime/types/utils/to-property-key.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";
import toNumber from "../../runtime/algorithms/to-number.js";

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
      const boolVal = yield* toBoolean(value, context.realm);
      return types.boolean(!boolVal.value);
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
  // FIXME: This seems weird and jank.  Validate that this logic is correct.
  // https://tc39.es/ecma262/#sec-delete-operator
  // Seems to be some ReferenceRecord we aren't doing.

  const argument = node.argument;
  if (argument.type === "MemberExpression") {
    const object = yield* EvaluateNodeCommand(argument.object, context, {
      forNormalValue: "UnaryExpression.argument<MemberExpression>.object",
    });

    if (!isStaticJsObjectLike(object)) {
      // FIXME: This might actualy be allowed... Delete is weird.
      throw new ThrowCompletion(
        context.realm.types.error(
          "TypeError",
          "Cannot delete property of non-object.",
        ),
      );
    }

    const property = argument.property;
    let propertyName: string;
    if (!argument.computed && property.type === "Identifier") {
      propertyName = property.name;
    } else {
      const propertyValue = yield* EvaluateNodeCommand(property, context, {
        forNormalValue: "UnaryExpression.argument<MemberExpression>.property",
      });

      propertyName = toPropertyKey(propertyValue);
    }

    const result = yield* object.deletePropertyEvaluator(propertyName);
    return context.realm.types.boolean(result);
  } else if (argument.type === "Identifier") {
    const env = context.env;
    const name = argument.name;

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

    // We just return true regardless apparently?
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
  if (argument.type === "Identifier") {
    const name = argument.name;
    const env = context.env;

    const hasBinding = yield* env.hasBindingEvaluator(name);

    if (hasBinding) {
      const bindingValue = yield* env.getBindingValueEvaluator(name, false);
      return context.realm.types.string(bindingValue.typeOf);
    }

    return context.realm.types.string("undefined");
  } else {
    const value = yield* EvaluateNodeCommand(argument, context, {
      forNormalValue: "UnaryExpression<typeof>.argument",
    });

    return context.realm.types.string(value.typeOf);
  }
}
