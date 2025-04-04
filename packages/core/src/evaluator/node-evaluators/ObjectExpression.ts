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
  StaticJsObject,
} from "../../runtime/types/interfaces/StaticJsObject.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/types/EvaluateNodeCommand.js";
import NormalCompletion from "../completions/NormalCompletion.js";

import createFunction from "./Function.js";
import toPropertyKey from "../../runtime/types/utils/to-property-key.js";
import { Completion } from "../completions/index.js";

// Note: I tested the edge-case of having a computed property key that is an expression mutate the value used in the value,
// and the result is each key is computed before its property, and the next property/value pair is computed after the previous property/value pair.

export default function* objectExpressionNodeEvaluator(
  node: ObjectExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const target = context.realm.types.createObject();

  for (const property of node.properties) {
    let completion: Completion;
    switch (property.type) {
      case "ObjectMethod":
        completion = yield* objectExpressionPropertyObjectMethodEvaluator(
          target,
          property,
          context,
        );
        break;
      case "ObjectProperty":
        completion = yield* objectExpressionPropertyObjectPropertyEvaluator(
          target,
          property,
          context,
        );
        break;
      case "SpreadElement": {
        completion = yield* objectExpressionPropertySpreadElementEvaluator(
          target,
          property,
          context,
        );
        break;
      }
      default: {
        // @ts-expect-error: Normally we won't get here, but include it for malformed ASTs.
        const type = property.type;
        throw new Error("Unsupported property type: " + type);
      }
    }

    if (completion.type === "throw") {
      return completion;
    }
  }

  return NormalCompletion(target);
}

function* objectExpressionPropertyObjectMethodEvaluator(
  target: StaticJsObject,
  property: ObjectMethod,
  context: EvaluationContext,
): EvaluationGenerator {
  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    // Identifiers evaluate to their values, but we want their name.
    propertyName = propertyKey.name;
  } else {
    const resolvedCompletion = yield* EvaluateNodeCommand(propertyKey, context);
    if (resolvedCompletion.type === "throw") {
      return resolvedCompletion;
    }
    if (resolvedCompletion.type !== "normal" || !resolvedCompletion.value) {
      throw new Error(
        `ObjectMethod: Expected normal completion, got ${resolvedCompletion.type}`,
      );
    }
    const resolved = resolvedCompletion.value;

    propertyName = toPropertyKey(resolved);
  }

  const method = createFunction(propertyName, property, context);

  switch (property.kind) {
    case "method": {
      yield* target.setPropertyEvaluator(
        propertyName,
        method,
        context.realm.strict,
      );
      return NormalCompletion(null);
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
      return NormalCompletion(null);
    }
    case "set": {
      yield* target.definePropertyEvaluator(propertyName, {
        enumerable: true,
        configurable: true,
        *set(value: StaticJsValue) {
          yield* method.call(target, value);
        },
      });
      return NormalCompletion(null);
    }
  }

  const kind = property.kind;
  throw new Error("Unsupported method kind: " + kind);
}

function* objectExpressionPropertyObjectPropertyEvaluator(
  target: StaticJsObject,
  property: ObjectProperty,
  context: EvaluationContext,
): EvaluationGenerator {
  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    propertyName = propertyKey.name;
  } else if (propertyKey.type === "PrivateName") {
    throw new Error("Private fields are not supported");
  } else {
    const resolvedCompletion = yield* EvaluateNodeCommand(propertyKey, context);
    if (resolvedCompletion.type === "throw") {
      return resolvedCompletion;
    }
    if (resolvedCompletion.type !== "normal" || !resolvedCompletion.value) {
      throw new Error(
        `ObjectProperty: Expected normal completion, got ${resolvedCompletion.type}`,
      );
    }
    const resolved = resolvedCompletion.value;
    propertyName = toPropertyKey(resolved);
  }

  const valueCompletion = yield* EvaluateNodeCommand(property.value, context);
  if (valueCompletion.type === "throw") {
    return valueCompletion;
  }
  if (valueCompletion.type !== "normal" || !valueCompletion.value) {
    throw new Error(
      `ObjectProperty: Expected normal completion, got ${valueCompletion.type}`,
    );
  }

  const value = valueCompletion.value;
  yield* target.setPropertyEvaluator(propertyName, value, context.realm.strict);
  return NormalCompletion(null);
}

function* objectExpressionPropertySpreadElementEvaluator(
  target: StaticJsObject,
  property: SpreadElement,
  context: EvaluationContext,
): EvaluationGenerator {
  const valueCompletion = yield* EvaluateNodeCommand(
    property.argument,
    context,
  );
  if (valueCompletion.type === "throw") {
    return valueCompletion;
  }
  if (valueCompletion.type !== "normal" || !valueCompletion.value) {
    throw new Error(
      `SpreadElement: Expected normal completion, got ${valueCompletion.type}`,
    );
  }

  const value = valueCompletion.value;
  if (!isStaticJsObject(value)) {
    // Apparently we just ignore these
    return NormalCompletion(null);
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

  return NormalCompletion(null);
}
