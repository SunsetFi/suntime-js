import { UnaryExpression } from "@babel/types";

import { isStaticJsObjectLike } from "../../runtime/types/interfaces/StaticJsObject.js";
import toPropertyKey from "../../runtime/types/utils/to-property-key.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion } from "../completions/index.js";

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
  const value = yield* EvaluateNodeAssertValueCommand(node.argument, context);

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
      // TODO: Wrap the error
      throw new Error("Not implemented: throw");
  }

  throw new Error(`Unknown unary operator: ${node.operator}.`);
}

function* deleteExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  // FIXME: This seems weird and jank.  Validate that this logic is correct.

  const argument = node.argument;
  if (argument.type === "MemberExpression") {
    const object = yield* EvaluateNodeAssertValueCommand(
      argument.object,
      context,
    );
    if (!isStaticJsObjectLike(object)) {
      throw new Error("Cannot delete property of non-object.");
    }

    const property = argument.property;
    let propertyName: string;
    if (!argument.computed && property.type === "Identifier") {
      propertyName = property.name;
    } else {
      const resolved = yield* EvaluateNodeAssertValueCommand(property, context);
      propertyName = toPropertyKey(resolved);
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
    const value = yield* EvaluateNodeAssertValueCommand(argument, context);
    return NormalCompletion(context.realm.types.string(value.typeOf));
  }
}
