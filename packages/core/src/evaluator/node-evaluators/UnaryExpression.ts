import { UnaryExpression } from "@babel/types";

import { isStaticJsObjectLike } from "../../runtime/types/interfaces/StaticJsObject.js";
import toPropertyKey from "../../runtime/types/utils/to-property-key.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion, ThrowCompletion } from "../completions/index.js";
import StaticJsEngineError from "../StaticJsEngineError.js";

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
    rethrow: true,
    forNormalValue: "UnaryExpression.argument",
  });

  const types = context.realm.types;
  switch (node.operator) {
    case "!":
      return NormalCompletion(types.boolean(!value.toJs()));
    // I'm reasonably sure native javascript converts these to number for these operations.
    // Typescript doesn't like it though, so let's cast it ourselves.
    case "-":
      return NormalCompletion(types.number(-value.toNumber()));
    case "+":
      return NormalCompletion(types.number(+value.toNumber()));
    case "~":
      return NormalCompletion(types.number(~value.toNumber()));
    case "void":
      return NormalCompletion(types.undefined);
    case "throw":
      return ThrowCompletion(value);
  }

  throw new StaticJsEngineError(`Unknown unary operator: ${node.operator}.`);
}

function* deleteExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  // FIXME: This seems weird and jank.  Validate that this logic is correct.

  const argument = node.argument;
  if (argument.type === "MemberExpression") {
    const object = yield* EvaluateNodeCommand(argument.object, context, {
      rethrow: true,
      forNormalValue: "UnaryExpression.argument<MemberExpression>.object",
    });

    if (!isStaticJsObjectLike(object)) {
      // FIXME: This might actualy be allowed... Delete is weird.
      return ThrowCompletion(
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
        rethrow: true,
        forNormalValue: "UnaryExpression.argument<MemberExpression>.property",
      });

      propertyName = toPropertyKey(propertyValue);
    }

    const result = yield* object.deletePropertyEvaluator(propertyName);
    return NormalCompletion(context.realm.types.boolean(result));
  } else if (argument.type === "Identifier") {
    const env = context.env;
    const name = argument.name;
    yield* env.deleteBindingEvaluator(name);

    // We just return true regardless apparently?
    return NormalCompletion(context.realm.types.true);
  }

  // ???
  // `delete 4` returns true???
  return NormalCompletion(context.realm.types.true);
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
      return NormalCompletion(context.realm.types.string(bindingValue.typeOf));
    }
    return NormalCompletion(context.realm.types.string("undefined"));
  } else {
    const value = yield* EvaluateNodeCommand(argument, context, {
      rethrow: true,
      forNormalValue: "UnaryExpression<typeof>.argument",
    });
    return NormalCompletion(context.realm.types.string(value.typeOf));
  }
}
