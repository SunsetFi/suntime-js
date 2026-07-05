import type { ClassMethod, ClassPrivateMethod, ObjectMethod } from "@babel/types";

import type { StaticJsFunction } from "#types/StaticJsFunction.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPrivateName } from "#types/StaticJsPrivateName.js";
import type { StaticJsPropertyKey } from "#types/StaticJsPropertyKey.js";

import { expectedArgumentCount } from "#algorithms/expected-argument-count.js";
import { setFunctionLength } from "#algorithms/set-function-length.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { verifyNoTsParameterProperties } from "#grammar/verify-no-ts-parameter-properties.js";
import { StaticJsAstClassConstructorFunction } from "#types/implementation/functions/StaticJsAstClassConstructorFunction.js";
import { StaticJsAstMethodFunction } from "#types/implementation/functions/StaticJsAstMethodFunction.js";

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
  const { lexicalEnv: env, privateEnv, realm, scriptOrModule } = EvaluationContext.current;

  const sourceText = scriptOrModule?.ecmaScriptSource.slice(method.start!, method.end!) ?? "";

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
    closure = StaticJsAstClassConstructorFunction.create({
      realm,
      node: method,
      sourceText,
      homeObject: object,
      env,
      privateEnv,
      prototype: functionPrototype,
    });
  } else {
    closure = StaticJsAstMethodFunction.create({
      realm,
      node: method,
      sourceText,
      homeObject: object,
      env,
      privateEnv,
      prototype: functionPrototype,
    });
  }

  const len = expectedArgumentCount(method.params);
  yield* setFunctionLength(closure, len);
  // End OrdinaryFunctionCreate

  return {
    key: propKey,
    closure,
  };
});
