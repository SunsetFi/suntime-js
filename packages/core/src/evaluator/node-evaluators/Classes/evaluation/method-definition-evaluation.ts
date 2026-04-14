import { ClassMethod, ClassPrivateMethod } from "@babel/types";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { setFunctionName } from "../../../../runtime/algorithms/set-function-name.js";
import { defineMethod } from "./define-method.js";
import { defineMethodProperty } from "./define-method-property.js";
import { StaticJsPrivateElement } from "../../../../runtime/types/StaticJsPrivateElement.js";
import { EvaluateNodeCommand } from "../../../commands/EvaluateNodeCommand.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { StaticJsClassMethodFunction } from "../types/StaticJsClassMethodFunction.js";
import { Q } from "../../../completions/Q.js";
import { StaticJsPropertyDescriptorRecord } from "../../../../runtime/types/StaticJsPropertyDescriptor.js";
import definePropertyOrThrow from "../../../../runtime/algorithms/define-property-or-throw.js";
import { isStaticJsString } from "../../../../runtime/types/StaticJsString.js";
import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { toStaticJsPropertyKey } from "../../../../runtime/types/StaticJsPropertyKey.js";
import { isStaticJsPrivateName } from "../../../../runtime/types/StaticJsPrivateName.js";

export const methodDefinitionEvaluation = Q.makeReceiver(function* methodDefinitionEvaluation(
  element: ClassMethod | ClassPrivateMethod,
  object: StaticJsObject,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;
  if (!privateEnv) {
    throw new StaticJsEngineError(
      "Cannot call methodDefinitionEvaluation without a private env set",
    );
  }

  if (element.kind === "get") {
    const propKeyValue = yield* Q(EvaluateNodeCommand(element.key));
    if (!isStaticJsString(propKeyValue) && !isStaticJsPrivateName(propKeyValue)) {
      throw new StaticJsEngineError(`Invalid method name for getter.`);
    }
    const propKey = isStaticJsPrivateName(propKeyValue)
      ? propKeyValue
      : toStaticJsPropertyKey(propKeyValue);

    const closure = new StaticJsClassMethodFunction(realm, element, object, env, privateEnv);

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
  } else if (element.kind === "set") {
    const propKeyValue = yield* Q(EvaluateNodeCommand(element.key));
    if (!isStaticJsString(propKeyValue) && !isStaticJsPrivateName(propKeyValue)) {
      throw new StaticJsEngineError(`Invalid method name for setter.`);
    }
    const propKey = isStaticJsPrivateName(propKeyValue)
      ? propKeyValue
      : toStaticJsPropertyKey(propKeyValue);

    const closure = new StaticJsClassMethodFunction(realm, element, object, env, privateEnv);

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
  } else {
    const methodDef = yield* Q(defineMethod(element, object));
    yield* setFunctionName(methodDef.closure, methodDef.key);
    return yield* defineMethodProperty(object, methodDef.key, methodDef.closure, enumerable);
  }
});
