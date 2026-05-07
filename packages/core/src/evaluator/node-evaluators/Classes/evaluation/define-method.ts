import { ClassMethod, ClassPrivateMethod, ObjectMethod } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { verifyNoTsParameterProperties } from "../../../../grammar/verify-no-ts-parameter-properties.js";
import { expectedArgumentCount } from "../../../../runtime/algorithms/expected-argument-count.js";
import { setFunctionLength } from "../../../../runtime/algorithms/set-function-length.js";
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
  verifyNoTsParameterProperties(method.params);

  // Spec says evaluation here, but its syntax tree type is ClassElementName, while we have Identifier.
  // Trying to use EvaluateNodeCommand here will just give us a value reference.
  const propKey = yield* Q(classElementNameNodeEvaluator(method));
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;
  if (!functionPrototype) {
    functionPrototype = realm.intrinsics["Function.prototype"];
  }

  // OrdinaryFunctionCreate
  // We actually have this algorithm defined, but it uses StaticJsAstFunction and not the subclasses for class methods.
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

  const len = expectedArgumentCount(method.params);
  yield* setFunctionLength(closure, len);
  // End OrdinaryFunctionCreate

  return {
    key: propKey,
    closure,
  };
});
