import type { ObjectExpression, ObjectMethod, ObjectProperty, SpreadElement } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { toPropertyKey } from "../../runtime/utils/to-property-key.js";

import type { StaticJsPlainObject } from "../../runtime/types/StaticJsPlainObject.js";
import { isStaticJsPlainObject } from "../../runtime/types/StaticJsPlainObject.js";
import type { StaticJsPropertyKey } from "../../runtime/types/StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../../runtime/types/StaticJsSymbol.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { createFunction } from "./Function.js";
import { set } from "../../runtime/algorithms/set.js";
import { get } from "../../runtime/algorithms/get.js";
import { setFunctionName } from "../../runtime/algorithms/set-function-name.js";

// Note: I tested the edge-case of having a computed property key that is an expression mutate the value used in the value,
// and the result is each key is computed before its property, and the next property/value pair is computed after the previous property/value pair.

export default function* objectExpressionNodeEvaluator(
  node: ObjectExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const target = realm.types.object();

  for (const property of node.properties) {
    switch (property.type) {
      case "ObjectMethod":
        yield* objectExpressionPropertyObjectMethodEvaluator(target, property);
        break;
      case "ObjectProperty":
        yield* objectExpressionPropertyObjectPropertyEvaluator(target, property);
        break;
      case "SpreadElement": {
        yield* objectExpressionPropertySpreadElementEvaluator(target, property);
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
  target: StaticJsPlainObject,
  property: ObjectMethod,
): EvaluationGenerator {
  const { lexicalEnv, strict } = EvaluationContext.current;

  const propertyKeyNode = property.key;

  let propertyKey: StaticJsPropertyKey;
  let functionName: string;

  if (!property.computed && propertyKeyNode.type === "Identifier") {
    // Identifiers evaluate to their values, but we want their name.
    propertyKey = propertyKeyNode.name;
    functionName = propertyKeyNode.name;
  } else {
    const property = yield* Q.val(EvaluateNodeCommand(propertyKeyNode));
    propertyKey = yield* toPropertyKey(property);
    if (isStaticJsSymbol(propertyKey)) {
      functionName = `Symbol(${propertyKey.description})`;
    } else {
      functionName = propertyKey;
    }
  }

  const method = createFunction(property, lexicalEnv);
  yield* setFunctionName(method, functionName);

  switch (property.kind) {
    case "method": {
      yield* set(target, propertyKey, method, strict);
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
  target: StaticJsPlainObject,
  property: ObjectProperty,
): EvaluationGenerator {
  const propertyKeyNode = property.key;

  let propertyKey: StaticJsPropertyKey;
  if (!property.computed && propertyKeyNode.type === "Identifier") {
    propertyKey = propertyKeyNode.name;
  } else if (propertyKeyNode.type === "PrivateName") {
    throw new StaticJsEngineError("Private fields are not supported");
  } else {
    const property = yield* Q.val(EvaluateNodeCommand(propertyKeyNode));
    propertyKey = yield* toPropertyKey(property);
  }

  const value = yield* Q.val(EvaluateNodeCommand(property.value));

  yield* target.defineOwnPropertyEvaluator(propertyKey, {
    enumerable: true,
    configurable: true,
    writable: true,
    value,
  });
  return null;
}

function* objectExpressionPropertySpreadElementEvaluator(
  target: StaticJsPlainObject,
  property: SpreadElement,
): EvaluationGenerator {
  const { strict } = EvaluationContext.current;
  const value = yield* Q.val(EvaluateNodeCommand(property.argument));
  if (!isStaticJsPlainObject(value)) {
    // Apparently we just ignore these
    return null;
  }

  const ownKeys = yield* value.ownPropertyKeysEvaluator();
  for (const key of ownKeys) {
    const propertyValue = yield* get(value, key);
    yield* set(target, key, propertyValue, strict);
  }

  return null;
}
