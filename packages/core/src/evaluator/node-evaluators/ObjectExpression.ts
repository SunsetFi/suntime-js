import type { ObjectExpression, ObjectProperty, SpreadElement } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import isAnonymousFunctionDefinition from "../../grammar/is-anonymous-function-definition.js";
import { copyDataProperties } from "../../runtime/algorithms/copy-data-properties.js";
import { createDataPropertyOrThrow } from "../../runtime/algorithms/create-data-property-or-throw.js";
import { toPropertyKey } from "../../runtime/algorithms/to-property-key.js";
import { isStaticJsNull } from "../../runtime/types/StaticJsNull.js";
import { isStaticJsObject, StaticJsObject } from "../../runtime/types/StaticJsObject.js";
import { type StaticJsPropertyKey } from "../../runtime/types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { methodDefinitionEvaluation } from "./Classes/evaluation/method-definition-evaluation.js";
import NamedEvaluation from "./NamedEvaluation.js";

export default function* objectExpressionNodeEvaluator(
  node: ObjectExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const target = realm.types.object();

  for (const property of node.properties) {
    switch (property.type) {
      case "ObjectMethod":
        yield* Q(methodDefinitionEvaluation(property, target, true));
        break;
      case "ObjectProperty":
        yield* Q(propertyDefinitionEvaluation(property, target));
        break;
      case "SpreadElement":
        yield* Q(spreadElementEvaluation(property, target));
        break;
      default: {
        // @ts-expect-error: Normally we won't get here, but include it for malformed ASTs.
        const type = property.type;
        throw new StaticJsEngineError("Unsupported property type: " + type);
      }
    }
  }

  return target;
}

function* spreadElementEvaluation(
  node: SpreadElement,
  object: StaticJsObject,
): EvaluationGenerator<void> {
  const value = yield* Q.val(EvaluateNodeCommand(node.argument));
  yield* copyDataProperties(object, value, []);
}

function* propertyDefinitionEvaluation(
  node: ObjectProperty,
  object: StaticJsObject,
): EvaluationGenerator<void> {
  const propKey = yield* propertyNameEvaluator(node);

  let isProtoSetter: boolean = false;
  // Apparently json parsing stuff does weird things here with isProtoSetter
  if (propKey === "__proto__" && !node.computed) {
    isProtoSetter = true;
  }

  let propValue: StaticJsValue;
  if (isAnonymousFunctionDefinition(node) && !isProtoSetter) {
    propValue = yield* Q.val(NamedEvaluation(propKey, node.value));
  } else {
    propValue = yield* Q.val(EvaluateNodeCommand(node.value));
  }

  if (isProtoSetter) {
    if (isStaticJsObject(propValue)) {
      yield* object.setPrototypeOfEvaluator(propValue);
      return;
    } else if (isStaticJsNull(propValue)) {
      yield* object.setPrototypeOfEvaluator(null);
      return;
    }
  }

  yield* createDataPropertyOrThrow(object, propKey, propValue);
}

// Like ClassElementNameNodeEvaluator, but does not have private name handling
function* propertyNameEvaluator(node: ObjectProperty): EvaluationGenerator<StaticJsPropertyKey> {
  if (!node.computed && node.key.type === "Identifier") {
    return node.key.name;
  }

  const result = yield* Q.val(EvaluateNodeCommand(node.key));
  return yield* toPropertyKey(result);
}
