import {
  ObjectExpression,
  ObjectMethod,
  ObjectProperty,
  SpreadElement,
} from "@babel/types";

import { isStaticJsObject, StaticJsObject } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

import createFunction from "./Function.js";

// Note: I tested the edge-case of having a computed property key that is an expression mutate the value used in the value,
// and the result is each key is computed before its property, and the next property/value pair is computed after the previous property/value pair.

export default function* objectExpressionNodeEvaluator(
  node: ObjectExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const target = StaticJsObject();

  for (const property of node.properties) {
    switch (property.type) {
      case "ObjectMethod":
        yield* objectExpressionPropertyObjectMethodEvaluator(
          target,
          property,
          context,
        );
        break;
      case "ObjectProperty":
        yield* objectExpressionPropertyObjectPropertyEvaluator(
          target,
          property,
          context,
        );
        break;
      case "SpreadElement":
        yield* objectExpressionPropertySpreadElementEvaluator(
          target,
          property,
          context,
        );
        break;
      default: {
        // @ts-expect-error: Normally we won't get here, but include it for malformed ASTs.
        const type = property.type;
        throw new Error("Unsupported property type: " + type);
      }
    }
  }

  return NormalCompletion(target);
}

function* objectExpressionPropertyObjectMethodEvaluator(
  target: StaticJsObject,
  property: ObjectMethod,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    // Identifiers evaluate to their values, but we want their name.
    propertyName = propertyKey.name;
  } else {
    const resolved = yield* EvaluateNodeAssertValueCommand(
      propertyKey,
      context,
    );
    propertyName = StaticJsObject.toPropertyKey(resolved);
  }

  const value = createFunction(propertyName, property, context);
  yield* target.setPropertyEvaluator(propertyName, value, context.realm.strict);
}

function* objectExpressionPropertyObjectPropertyEvaluator(
  target: StaticJsObject,
  property: ObjectProperty,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    propertyName = propertyKey.name;
  } else if (propertyKey.type === "PrivateName") {
    throw new Error("Private fields are not supported");
  } else {
    const resolved = yield* EvaluateNodeAssertValueCommand(
      propertyKey,
      context,
    );
    propertyName = StaticJsObject.toPropertyKey(resolved);
  }

  const value = yield* EvaluateNodeAssertValueCommand(property.value, context);
  yield* target.setPropertyEvaluator(propertyName, value, context.realm.strict);
}

function* objectExpressionPropertySpreadElementEvaluator(
  target: StaticJsObject,
  property: SpreadElement,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const value = yield* EvaluateNodeAssertValueCommand(
    property.argument,
    context,
  );
  if (!isStaticJsObject(value)) {
    throw new Error("Cannot spread non-object value");
  }

  const ownKeys = yield* value.getOwnKeysEvaluator();
  for (const key of ownKeys) {
    const propertyValue = yield* value.getPropertyEvaluator(key);
    yield* target.setPropertyEvaluator(
      key,
      propertyValue,
      context.realm.strict,
    );
  }
}
