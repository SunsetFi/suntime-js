import type { ObjectExpression, ObjectMethod, ObjectProperty, SpreadElement } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import toPropertyKey from "../../runtime/utils/to-property-key.js";

import type { StaticJsObject } from "../../runtime/types/StaticJsObject.js";
import { isStaticJsObject } from "../../runtime/types/StaticJsObject.js";
import type { StaticJsObjectPropertyKey } from "../../runtime/types/StaticJsObjectLike.js";
import { isStaticJsSymbol } from "../../runtime/types/StaticJsSymbol.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import createFunction from "./Function.js";

// Note: I tested the edge-case of having a computed property key that is an expression mutate the value used in the value,
// and the result is each key is computed before its property, and the next property/value pair is computed after the previous property/value pair.

export default function* objectExpressionNodeEvaluator(
  node: ObjectExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const target = context.realm.types.object();

  for (const property of node.properties) {
    switch (property.type) {
      case "ObjectMethod":
        yield* objectExpressionPropertyObjectMethodEvaluator(target, property, context);
        break;
      case "ObjectProperty":
        yield* objectExpressionPropertyObjectPropertyEvaluator(target, property, context);
        break;
      case "SpreadElement": {
        yield* objectExpressionPropertySpreadElementEvaluator(target, property, context);
        break;
      }
      default: {
        // @ts-expect-error: Normally we won't get here, but include it for malformed ASTs.
        const type = property.type;
        throw new StaticJsEngineError("Unsupported property type: " + type);
      }
    }
  }

  return target;
}

function* objectExpressionPropertyObjectMethodEvaluator(
  target: StaticJsObject,
  property: ObjectMethod,
  context: EvaluationContext,
): EvaluationGenerator {
  const propertyKeyNode = property.key;
  let propertyKey: StaticJsObjectPropertyKey;
  let functionName: string;
  if (!property.computed && propertyKeyNode.type === "Identifier") {
    // Identifiers evaluate to their values, but we want their name.
    propertyKey = propertyKeyNode.name;
    functionName = propertyKeyNode.name;
  } else {
    const property = yield* EvaluateNodeCommand(propertyKeyNode, context, {
      forNormalValue: "ObjectMethod.key",
    });
    propertyKey = yield* toPropertyKey(property, context.realm);
    if (isStaticJsSymbol(propertyKey)) {
      functionName = `Symbol(${propertyKey.description})`;
    } else {
      functionName = propertyKey;
    }
  }

  const method = createFunction(functionName, property, context);

  switch (property.kind) {
    case "method": {
      yield* target.setEvaluator(propertyKey, method, context.strict);
      return null;
    }
    case "get": {
      yield* target.defineOwnPropertyEvaluator(propertyKey, {
        enumerable: true,
        configurable: true,
        get: method,
      });
      return null;
    }
    case "set": {
      yield* target.defineOwnPropertyEvaluator(propertyKey, {
        enumerable: true,
        configurable: true,
        set: method,
      });
      return null;
    }
  }

  const kind = property.kind;
  throw new StaticJsEngineError("Unsupported method kind: " + kind);
}

function* objectExpressionPropertyObjectPropertyEvaluator(
  target: StaticJsObject,
  property: ObjectProperty,
  context: EvaluationContext,
): EvaluationGenerator {
  const propertyKeyNode = property.key;
  let propertyKey: StaticJsObjectPropertyKey;
  if (!property.computed && propertyKeyNode.type === "Identifier") {
    propertyKey = propertyKeyNode.name;
  } else if (propertyKeyNode.type === "PrivateName") {
    throw new StaticJsEngineError("Private fields are not supported");
  } else {
    const property = yield* EvaluateNodeCommand(propertyKeyNode, context, {
      forNormalValue: "ObjectProperty.key",
    });
    propertyKey = yield* toPropertyKey(property, context.realm);
  }

  const value = yield* EvaluateNodeCommand(property.value, context, {
    forNormalValue: "ObjectProperty.value",
  });
  yield* target.setEvaluator(propertyKey, value, context.strict);
  return null;
}

function* objectExpressionPropertySpreadElementEvaluator(
  target: StaticJsObject,
  property: SpreadElement,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(property.argument, context, {
    forNormalValue: "SpreadElement.argument",
  });
  if (!isStaticJsObject(value)) {
    // Apparently we just ignore these
    return null;
  }

  const ownKeys = yield* value.ownPropertyKeysEvaluator();
  for (const key of ownKeys) {
    const propertyValue = yield* value.getEvaluator(key);
    yield* target.setEvaluator(key, propertyValue, context.strict);
  }

  return null;
}
