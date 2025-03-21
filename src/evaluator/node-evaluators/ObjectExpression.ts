import {
  ObjectExpression,
  ObjectMethod,
  ObjectProperty,
  SpreadElement,
} from "@babel/types";

import {
  isStaticJsObject,
  StaticJsEnvironment,
  StaticJsObject,
} from "../../environment/index.js";

import { evaluateNodeAssertValue } from "./evaluate-node.js";
import functionNodeEvaluator from "./Function.js";

export default function objectExpressionNodeEvaluator(
  node: ObjectExpression,
  env: StaticJsEnvironment,
) {
  const target = StaticJsObject();

  for (const property of node.properties) {
    switch (property.type) {
      case "ObjectMethod":
        objectExpressionPropertyObjectMethodEvaluator(target, property, env);
        break;
      case "ObjectProperty":
        objectExpressionPropertyObjectPropertyEvaluator(target, property, env);
        break;
      case "SpreadElement":
        objectExpressionPropertySpreadElementEvaluator(target, property, env);
        break;
      default:
        throw new Error("Unsupported property type: " + (property as any).type);
    }
  }

  return target;
}

function objectExpressionPropertyObjectMethodEvaluator(
  target: StaticJsObject,
  property: ObjectMethod,
  env: StaticJsEnvironment,
) {
  // FIXME: Sometimes property keys can be expressions.  Can those expressions have side effects?
  // If so, do we resolve the expression first, or the value?

  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    // Identifiers evaluate to their values, but we want their name.
    propertyName = propertyKey.name;
  } else {
    const resolved = evaluateNodeAssertValue(propertyKey, env);
    propertyName = StaticJsObject.toPropertyKey(resolved);
  }

  const value = functionNodeEvaluator(propertyName, property, env);
  target.setProperty(propertyName, value);
}

function objectExpressionPropertyObjectPropertyEvaluator(
  target: StaticJsObject,
  property: ObjectProperty,
  env: StaticJsEnvironment,
) {
  // FIXME: Sometimes property keys can be expressions.  Can those expressions have side effects?
  // If so, do we resolve the expression first, or the value?
  const value = evaluateNodeAssertValue(property.value, env);

  const propertyKey = property.key;
  let propertyName: string;
  if (!property.computed && propertyKey.type === "Identifier") {
    propertyName = propertyKey.name;
  } else if (propertyKey.type === "PrivateName") {
    throw new Error("Private fields are not supported");
  } else {
    const resolved = evaluateNodeAssertValue(propertyKey, env);
    propertyName = StaticJsObject.toPropertyKey(resolved);
  }

  target.setProperty(propertyName, value);
}

function objectExpressionPropertySpreadElementEvaluator(
  target: StaticJsObject,
  property: SpreadElement,
  env: StaticJsEnvironment,
) {
  const value = evaluateNodeAssertValue(property.argument, env);
  if (!isStaticJsObject(value)) {
    throw new Error("Cannot spread non-object value");
  }

  for (const key of value.getKeys()) {
    target.setProperty(key, value.getProperty(key));
  }
}
