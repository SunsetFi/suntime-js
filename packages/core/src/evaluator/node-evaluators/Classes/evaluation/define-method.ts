import { ClassMethod, ClassPrivateMethod } from "@babel/types";

import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";

import {
  StaticJsPropertyKey,
  toStaticJsPropertyKey,
} from "../../../../runtime/types/StaticJsPropertyKey.js";

import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../commands/EvaluateNodeCommand.js";

import { Q } from "../../../completions/Q.js";

import { EvaluationContext } from "../../../EvaluationContext.js";

import { StaticJsClassConstructorFunction } from "../../../../runtime/types/implementation/functions/StaticJsClassConstructorFunction.js";
import { StaticJsClassMethodFunction } from "../../../../runtime/types/implementation/functions/StaticJsClassMethodFunction.js";
import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

export function* defineMethod(
  method: ClassMethod | ClassPrivateMethod,
  object: StaticJsObject,
  functionPrototype?: StaticJsObject,
): EvaluationGenerator<{ key: StaticJsPropertyKey; closure: StaticJsFunction }> {
  const propKeyValue = yield* Q(EvaluateNodeCommand(method.key));
  const propKey = toStaticJsPropertyKey(propKeyValue);
  const { lexicalEnv: env, privateEnv, realm } = EvaluationContext.current;
  if (!functionPrototype) {
    functionPrototype = realm.types.prototypes.functionProto;
  }

  if (!privateEnv) {
    throw new StaticJsEngineError(
      "Cannot define a class method when no private environment is set.",
    );
  }

  let closure: StaticJsFunction;
  if (method.kind === "constructor") {
    closure = new StaticJsClassConstructorFunction(
      realm,
      method,
      env,
      privateEnv,
      functionPrototype,
    );
  } else {
    closure = new StaticJsClassMethodFunction(
      realm,
      method,
      object,
      env,
      privateEnv,
      functionPrototype,
    );
  }

  return {
    key: propKey,
    closure,
  };
}
