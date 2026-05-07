import { ClassMethod, ClassPrivateMethod, ObjectMethod } from "@babel/types";

import { verifyNoTsParameterProperties } from "../../../../grammar/verify-no-ts-parameter-properties.js";
import { definePropertyOrThrow } from "../../../../runtime/algorithms/define-property-or-throw.js";
import { expectedArgumentCount } from "../../../../runtime/algorithms/expected-argument-count.js";
import { setFunctionLength } from "../../../../runtime/algorithms/set-function-length.js";
import { setFunctionName } from "../../../../runtime/algorithms/set-function-name.js";
import { StaticJsMethodFunction } from "../../../../runtime/types/implementation/functions/StaticJsMethodFunction.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsPrivateElement } from "../../../../runtime/types/StaticJsPrivateElement.js";
import { isStaticJsPrivateName } from "../../../../runtime/types/StaticJsPrivateName.js";
import { StaticJsPropertyDescriptorRecord } from "../../../../runtime/types/StaticJsPropertyDescriptor.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { classElementNameNodeEvaluator } from "../ClassElementName.js";

import { defineMethodProperty } from "./define-method-property.js";
import { defineMethod } from "./define-method.js";

export const methodDefinitionEvaluation = Q.makeReceiver(function* methodDefinitionEvaluation(
  element: ClassMethod | ClassPrivateMethod | ObjectMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  if (element.kind === "get") {
    return yield* getterMethodDefinitionEvaluation(element, object, enumerable);
  }

  if (element.kind === "set") {
    return yield* setterMethodDefinitionEvaluation(element, object, enumerable);
  }

  if (element.async) {
    if (element.generator) {
      return yield* asyncGeneratorMethodDefinitionEvaluation(element, object, enumerable);
    }

    return yield* asyncMethodDefinitionEvaluation(element, object, enumerable);
  }

  if (element.generator) {
    return yield* generatorMethodDefinitionEvaluation(element, object, enumerable);
  }

  return yield* ordinaryMethodDefinitionEvaluation(element, object, enumerable);
});

function* getterMethodDefinitionEvaluation(
  element: ClassMethod | ObjectMethod | ClassPrivateMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const { realm, lexicalEnv: env, privateEnv } = EvaluationContext.current;

  verifyNoTsParameterProperties(element.params);

  const propKey = yield* classElementNameNodeEvaluator(element);

  // OrdinaryFunctionCreate
  const closure = new StaticJsMethodFunction(realm, element, object, env, privateEnv);
  const len = expectedArgumentCount(element.params);
  yield* setFunctionLength(closure, len);
  // End OrdinaryFunctionCreate

  yield* setFunctionName(closure, propKey, "get");

  if (isStaticJsPrivateName(propKey)) {
    return {
      type: "private-element",
      key: propKey,
      kind: "accessor",
      get: closure,
      set: undefined,
    };
  }

  const desc: StaticJsPropertyDescriptorRecord = {
    get: closure,
    enumerable,
    configurable: true,
  };
  yield* definePropertyOrThrow(object, propKey, desc);
  return null;
}

function* setterMethodDefinitionEvaluation(
  element: ClassMethod | ObjectMethod | ClassPrivateMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const { realm, lexicalEnv: env, privateEnv } = EvaluationContext.current;

  verifyNoTsParameterProperties(element.params);

  const propKey = yield* classElementNameNodeEvaluator(element);

  // OrdinaryFunctionCreate
  const closure = new StaticJsMethodFunction(realm, element, object, env, privateEnv);
  const len = expectedArgumentCount(element.params);
  yield* setFunctionLength(closure, len);
  // End OrdinaryFunctionCreate

  yield* setFunctionName(closure, propKey, "set");

  if (isStaticJsPrivateName(propKey)) {
    return {
      type: "private-element",
      key: propKey,
      kind: "accessor",
      get: undefined,
      set: closure,
    };
  }

  const desc: StaticJsPropertyDescriptorRecord = {
    set: closure,
    enumerable,
    configurable: true,
  };
  yield* definePropertyOrThrow(object, propKey, desc);
  return null;
}

function* asyncGeneratorMethodDefinitionEvaluation(
  element: ClassMethod | ObjectMethod | ClassPrivateMethod,
  object: StaticJsObject,
  enumerable: boolean,
) {
  const { realm, lexicalEnv: env, privateEnv } = EvaluationContext.current;

  verifyNoTsParameterProperties(element.params);

  const propertyKey = yield* classElementNameNodeEvaluator(element);

  const closure = new StaticJsMethodFunction(
    realm,
    element,
    object,
    env,
    privateEnv,
    realm.intrinsics["AsyncGeneratorFunction.prototype"],
  );
  yield* setFunctionLength(closure, expectedArgumentCount(element.params));
  yield* setFunctionName(closure, propertyKey);

  const prototype = realm.types.object(undefined, realm.intrinsics["AsyncGeneratorPrototype"]);
  yield* definePropertyOrThrow(closure, "prototype", {
    value: prototype,
    writable: true,
    enumerable: false,
    configurable: false,
  });
  return yield* defineMethodProperty(object, propertyKey, closure, enumerable);
}

function* asyncMethodDefinitionEvaluation(
  element: ClassMethod | ObjectMethod | ClassPrivateMethod,
  object: StaticJsObject,
  enumerable: boolean,
) {
  const { realm, lexicalEnv: env, privateEnv } = EvaluationContext.current;

  verifyNoTsParameterProperties(element.params);

  const propertyKey = yield* classElementNameNodeEvaluator(element);

  const closure = new StaticJsMethodFunction(
    realm,
    element,
    object,
    env,
    privateEnv,
    realm.intrinsics["AsyncFunction.prototype"],
  );
  yield* setFunctionLength(closure, expectedArgumentCount(element.params));
  yield* setFunctionName(closure, propertyKey);

  return yield* defineMethodProperty(object, propertyKey, closure, enumerable);
}

function* generatorMethodDefinitionEvaluation(
  element: ClassMethod | ObjectMethod | ClassPrivateMethod,
  object: StaticJsObject,
  enumerable: boolean,
) {
  const { realm, lexicalEnv: env, privateEnv } = EvaluationContext.current;

  verifyNoTsParameterProperties(element.params);

  const propertyKey = yield* classElementNameNodeEvaluator(element);

  const closure = new StaticJsMethodFunction(
    realm,
    element,
    object,
    env,
    privateEnv,
    realm.intrinsics["GeneratorFunction.prototype"],
  );
  yield* setFunctionLength(closure, expectedArgumentCount(element.params));
  yield* setFunctionName(closure, propertyKey);

  const prototype = realm.types.object(undefined, realm.intrinsics["GeneratorPrototype"]);
  yield* definePropertyOrThrow(closure, "prototype", {
    value: prototype,
    writable: true,
    enumerable: false,
    configurable: false,
  });
  return yield* defineMethodProperty(object, propertyKey, closure, enumerable);
}

function* ordinaryMethodDefinitionEvaluation(
  element: ClassMethod | ObjectMethod | ClassPrivateMethod,
  object: StaticJsObject,
  enumerable: boolean,
) {
  const methodDef = yield* Q(defineMethod(element, object));
  yield* setFunctionName(methodDef.closure, methodDef.key);
  return yield* defineMethodProperty(object, methodDef.key, methodDef.closure, enumerable);
}
