import { ClassMethod, ClassPrivateMethod, ObjectMethod } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { StaticJsClassConstructorFunction } from "../../../../runtime/types/implementation/functions/StaticJsClassConstructorFunction.js";
import { StaticJsMethodFunction } from "../../../../runtime/types/implementation/functions/StaticJsMethodFunction.js";
import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsPrivateName } from "../../../../runtime/types/StaticJsPrivateName.js";
import { StaticJsPropertyKey } from "../../../../runtime/types/StaticJsPropertyKey.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { classElementNameNodeEvaluator } from "../ClassElementName.js";

export interface ClassMethodDefinition {
  key: StaticJsPropertyKey | StaticJsPrivateName;
  closure: StaticJsFunction;
}
export const defineMethod = Q.makeReceiver(function* defineMethod(
  method: ObjectMethod | ClassMethod | ClassPrivateMethod,
  object: StaticJsObject,
  functionPrototype?: StaticJsObject,
): EvaluationGenerator<ClassMethodDefinition> {
  // Spec says evaluation here, but its syntax tree type is ClassElementName, while we have Identifier.
  // Trying to use EvaluateNodeCommand here will just give us a value reference.
  const propKey = yield* Q(classElementNameNodeEvaluator(method));
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;
  if (!functionPrototype) {
    functionPrototype = realm.intrinsics["Function.prototype"];
  }

  let closure: StaticJsFunction;
  if (method.kind === "constructor") {
    if (!privateEnv) {
      throw new StaticJsEngineError(
        "Cannot define a class constructor method when no private environment is set.",
      );
    }
    closure = new StaticJsClassConstructorFunction(
      realm,
      method,
      object,
      env,
      privateEnv,
      functionPrototype,
    );
  } else {
    closure = new StaticJsMethodFunction(realm, method, object, env, privateEnv, functionPrototype);
  }

  return {
    key: propKey,
    closure,
  };
});
