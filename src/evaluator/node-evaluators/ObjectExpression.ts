import {
  ObjectExpression,
  ObjectMethod,
  ObjectProperty,
  SpreadElement,
} from "@babel/types";

import {
  assertStaticJsValue,
  StaticJsValue,
} from "../../runtime/types/interfaces/StaticJsValue.js";

import {
  isStaticJsObject,
  StaticJsObject as IStaticJsObject,
} from "../../runtime/types/interfaces/StaticJsObject.js";

import StaticJsObject from "../../runtime/types/factories/StaticJsObject.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeNormalValueCommand } from "../commands/types/EvaluateNodeCommand.js";
import NormalCompletion from "../completions/NormalCompletion.js";

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
  target: IStaticJsObject,
  property: ObjectMethod,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    // Identifiers evaluate to their values, but we want their name.
    propertyName = propertyKey.name;
  } else {
    const resolved = yield* EvaluateNodeNormalValueCommand(
      propertyKey,
      context,
    );
    propertyName = StaticJsObject.toPropertyKey(resolved);
  }

  const method = createFunction(propertyName, property, context);

  switch (property.kind) {
    case "method": {
      yield* target.setPropertyEvaluator(
        propertyName,
        method,
        context.realm.strict,
      );
      return;
    }
    case "get": {
      yield* target.definePropertyEvaluator(propertyName, {
        enumerable: true,
        configurable: true,
        *get() {
          const result = yield* method.call(target);
          assertStaticJsValue(result);
          return result;
        },
      });
      return;
    }
    case "set": {
      yield* target.definePropertyEvaluator(propertyName, {
        enumerable: true,
        configurable: true,
        *set(value: StaticJsValue) {
          yield* method.call(target, value);
        },
      });
      return;
    }
  }

  const kind = property.kind;
  throw new Error("Unsupported method kind: " + kind);
}

function* objectExpressionPropertyObjectPropertyEvaluator(
  target: IStaticJsObject,
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
    const resolved = yield* EvaluateNodeNormalValueCommand(
      propertyKey,
      context,
    );
    propertyName = StaticJsObject.toPropertyKey(resolved);
  }

  const value = yield* EvaluateNodeNormalValueCommand(property.value, context);
  yield* target.setPropertyEvaluator(propertyName, value, context.realm.strict);
}

function* objectExpressionPropertySpreadElementEvaluator(
  target: IStaticJsObject,
  property: SpreadElement,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const value = yield* EvaluateNodeNormalValueCommand(
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
