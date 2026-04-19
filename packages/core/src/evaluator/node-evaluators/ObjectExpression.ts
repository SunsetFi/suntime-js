import type { ObjectExpression, ObjectMethod, ObjectProperty, SpreadElement } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import isAnonymousFunctionDefinition from "../../grammar/is-anonymous-function-definition.js";
import { copyDataProperties } from "../../runtime/algorithms/copy-data-properties.js";
import { createDataPropertyOrThrow } from "../../runtime/algorithms/create-data-property-or-throw.js";
import { definePropertyOrThrow } from "../../runtime/algorithms/define-property-or-throw.js";
import { setFunctionName } from "../../runtime/algorithms/set-function-name.js";
import { StaticJsMethodFunction } from "../../runtime/types/implementation/functions/StaticJsMethodFunction.js";
import { isStaticJsNull } from "../../runtime/types/StaticJsNull.js";
import { isStaticJsObject, StaticJsObject } from "../../runtime/types/StaticJsObject.js";
import {
  StaticJsPrivateElement,
  staticJsPrivateElementAccessor,
} from "../../runtime/types/StaticJsPrivateElement.js";
import { isStaticJsPrivateName } from "../../runtime/types/StaticJsPrivateName.js";
import { StaticJsPropertyDescriptorRecord } from "../../runtime/types/StaticJsPropertyDescriptor.js";
import { type StaticJsPropertyKey } from "../../runtime/types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { toPropertyKey } from "../../runtime/utils/to-property-key.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { classElementNameNodeEvaluator } from "./Classes/ClassElementName.js";
import { defineMethodProperty } from "./Classes/evaluation/define-method-property.js";
import { defineMethod } from "./Classes/evaluation/define-method.js";
import NamedEvaluation from "./NamedEvaluation.js";

export default function* objectExpressionNodeEvaluator(
  node: ObjectExpression,
): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const target = realm.types.object();

  for (const property of node.properties) {
    switch (property.type) {
      case "ObjectMethod":
        yield* methodDefinitionEvaluation(property, target, true);
        break;
      case "ObjectProperty":
        yield* propertyDefinitionEvaluation(property, target);
        break;
      case "SpreadElement":
        yield* spreadElementEvaluation(property, target);
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

function* methodDefinitionEvaluation(
  node: ObjectMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  switch (node.kind) {
    case "method": {
      if (node.async) {
        if (node.generator) {
          return yield* asyncGeneratorMethodDefinitionEvaluation(node, object, enumerable);
        }

        return yield* asyncMethodDefinitionEvaluation(node, object, enumerable);
      } else if (node.generator) {
        return yield* methodDefinitionGeneratorEvaluation(node, object, enumerable);
      }

      const methodDef = yield* Q(defineMethod(node, object));
      yield* setFunctionName(methodDef.closure, methodDef.key);
      return yield* defineMethodProperty(object, methodDef.key, methodDef.closure, enumerable);
    }
    case "get":
      yield* methodDefinitionGetterEvaluation(node, object, enumerable);
      return null;
    case "set":
      yield* methodDefinitionSetterEvaluation(node, object, enumerable);
      return null;
  }
}

function* methodDefinitionGetterEvaluation(
  node: ObjectMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const propKey = yield* classElementNameNodeEvaluator(node);
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;

  const closure = new StaticJsMethodFunction(realm, node, object, env, privateEnv);

  // MakeMethod - implicit in StaticJsMethodFunction

  yield* setFunctionName(closure, propKey, "get");

  if (isStaticJsPrivateName(propKey)) {
    return staticJsPrivateElementAccessor(propKey, { get: closure });
  }

  const desc: StaticJsPropertyDescriptorRecord = {
    get: closure,
    enumerable,
    configurable: true,
  };

  yield* definePropertyOrThrow(object, propKey, desc);

  return null;
}

function* methodDefinitionSetterEvaluation(
  node: ObjectMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const propKey = yield* classElementNameNodeEvaluator(node);
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;

  const closure = new StaticJsMethodFunction(realm, node, object, env, privateEnv);

  // MakeMethod - implicit in StaticJsMethodFunction

  yield* setFunctionName(closure, propKey, "set");

  if (isStaticJsPrivateName(propKey)) {
    return staticJsPrivateElementAccessor(propKey, { set: closure });
  }

  const desc: StaticJsPropertyDescriptorRecord = {
    set: closure,
    enumerable,
    configurable: true,
  };

  yield* definePropertyOrThrow(object, propKey, desc);

  return null;
}

function* methodDefinitionGeneratorEvaluation(
  node: ObjectMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const propKey = yield* classElementNameNodeEvaluator(node);
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;

  const closure = new StaticJsMethodFunction(
    realm,
    node,
    object,
    env,
    privateEnv,
    realm.types.prototypes.generatorFunctionProto,
  );

  // MakeMethod - implicit in StaticJsMethodFunction

  yield* setFunctionName(closure, propKey);

  const prototype = realm.types.object(undefined, realm.types.prototypes.generatorProto);
  yield* definePropertyOrThrow(closure, "prototype", {
    value: prototype,
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return yield* defineMethodProperty(object, propKey, closure, enumerable);
}

function* asyncGeneratorMethodDefinitionEvaluation(
  node: ObjectMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const propKey = yield* classElementNameNodeEvaluator(node);
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;

  const closure = new StaticJsMethodFunction(
    realm,
    node,
    object,
    env,
    privateEnv,
    realm.types.prototypes.asyncGeneratorFunctionProto,
  );

  // MakeMethod - implicit in StaticJsMethodFunction

  yield* setFunctionName(closure, propKey);

  const prototype = realm.types.object(undefined, realm.types.prototypes.asyncGeneratorProto);
  yield* definePropertyOrThrow(closure, "prototype", {
    value: prototype,
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return yield* defineMethodProperty(object, propKey, closure, enumerable);
}

function* asyncMethodDefinitionEvaluation(
  node: ObjectMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const propKey = yield* classElementNameNodeEvaluator(node);
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;

  const closure = new StaticJsMethodFunction(
    realm,
    node,
    object,
    env,
    privateEnv,
    realm.types.prototypes.asyncFunctionProto,
  );

  // MakeMethod - implicit in StaticJsMethodFunction

  yield* setFunctionName(closure, propKey);

  return yield* defineMethodProperty(object, propKey, closure, enumerable);
}
