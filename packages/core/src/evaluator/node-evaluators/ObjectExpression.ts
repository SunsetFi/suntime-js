import {
  ObjectExpression,
  ObjectMethod,
  ObjectProperty,
  SpreadElement,
} from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import {
  isStaticJsObject,
  StaticJsObject,
} from "../../runtime/types/interfaces/StaticJsObject.js";
import toPropertyKey from "../../runtime/types/utils/to-property-key.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";
import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import createFunction from "./Function.js";

// Note: I tested the edge-case of having a computed property key that is an expression mutate the value used in the value,
// and the result is each key is computed before its property, and the next property/value pair is computed after the previous property/value pair.

export default function* objectExpressionNodeEvaluator(
  node: ObjectExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const target = context.realm.types.object();

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
        throw new StaticJsEngineError("Unsupported property type: " + type);
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
    const property = yield* EvaluateNodeCommand(propertyKey, context, {
      rethrow: true,
      forNormalValue: "ObjectMethod.key",
    });
    propertyName = toPropertyKey(property);
  }

  const method = createFunction(propertyName, property, context);

  switch (property.kind) {
    case "method": {
      yield* target.setPropertyEvaluator(
        propertyName,
        method,
        context.realm.strict,
      );
      return NormalCompletion();
    }
    case "get": {
      yield* target.definePropertyEvaluator(propertyName, {
        enumerable: true,
        configurable: true,
        get: method,
      });
      return NormalCompletion();
    }
    case "set": {
      yield* target.definePropertyEvaluator(propertyName, {
        enumerable: true,
        configurable: true,
        set: method,
      });
      return NormalCompletion();
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
  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    propertyName = propertyKey.name;
  } else if (propertyKey.type === "PrivateName") {
    throw new StaticJsEngineError("Private fields are not supported");
  } else {
    const property = yield* EvaluateNodeCommand(propertyKey, context, {
      rethrow: true,
      forNormalValue: "ObjectProperty.key",
    });
    propertyName = toPropertyKey(property);
  }

  const value = yield* EvaluateNodeCommand(property.value, context, {
    rethrow: true,
    forNormalValue: "ObjectProperty.value",
  });
  yield* target.setPropertyEvaluator(propertyName, value, context.realm.strict);
  return NormalCompletion();
}

function* objectExpressionPropertySpreadElementEvaluator(
  target: StaticJsObject,
  property: SpreadElement,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(property.argument, context, {
    rethrow: true,
    forNormalValue: "SpreadElement.argument",
  });
  if (!isStaticJsObject(value)) {
    // Apparently we just ignore these
    return NormalCompletion();
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

  return NormalCompletion();
}
