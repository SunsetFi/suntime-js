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

import { createClassMethodFunction } from "../../Function.js";

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

  const closure = createClassMethodFunction(method, env, privateEnv, object, functionPrototype);
  return {
    key: propKey,
    closure,
  };
}
