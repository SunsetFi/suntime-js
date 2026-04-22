import { ClassMethod, ClassPrivateMethod } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { definePropertyOrThrow } from "../../../../runtime/algorithms/define-property-or-throw.js";
import { setFunctionName } from "../../../../runtime/algorithms/set-function-name.js";
import { StaticJsMethodFunction } from "../../../../runtime/types/implementation/functions/StaticJsMethodFunction.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsPrivateElement } from "../../../../runtime/types/StaticJsPrivateElement.js";
import { isStaticJsPrivateName } from "../../../../runtime/types/StaticJsPrivateName.js";
import { StaticJsPropertyDescriptorRecord } from "../../../../runtime/types/StaticJsPropertyDescriptor.js";
import { toPropertyKey } from "../../../../runtime/utils/to-property-key.js";
import { EvaluateNodeCommand } from "../../../commands/EvaluateNodeCommand.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

import { defineMethodProperty } from "./define-method-property.js";
import { defineMethod } from "./define-method.js";

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
    const propKeyValue = yield* Q.val(EvaluateNodeCommand(element.key));
    const propKey = isStaticJsPrivateName(propKeyValue)
      ? propKeyValue
      : yield* toPropertyKey(propKeyValue);
    const closure = new StaticJsMethodFunction(realm, element, object, env, privateEnv);

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
    const propKeyValue = yield* Q.val(EvaluateNodeCommand(element.key));
    const propKey = isStaticJsPrivateName(propKeyValue)
      ? propKeyValue
      : yield* toPropertyKey(propKeyValue);

    const closure = new StaticJsMethodFunction(realm, element, object, env, privateEnv);

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
