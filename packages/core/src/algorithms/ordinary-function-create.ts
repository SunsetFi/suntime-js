import {
  type ClassMethod,
  type ClassPrivateMethod,
  type Function,
  type FunctionParameter,
  isBlockStatement,
  type ObjectMethod,
} from "@babel/types";

import { EvaluationContext } from "../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { StaticJsPrivateEnvironmentRecord } from "../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";
import { StaticJsAstFunction } from "../runtime/types/implementation/functions/StaticJsAstFunction.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";

import { expectedArgumentCount } from "./expected-argument-count.js";
import { setFunctionLength } from "./set-function-length.js";

export function* ordinaryFunctionCreate(
  functionPrototype: StaticJsObject,
  sourceText: string,
  parameterList: FunctionParameter[],
  body: Function | ObjectMethod | ClassMethod | ClassPrivateMethod,
  thisMode: "lexical-this" | "non-lexical-this",
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsAstFunction> {
  const { realm, scriptOrModule } = EvaluationContext.current;

  const strict = isStrict(body);

  const func = new StaticJsAstFunction(realm, body, sourceText, {
    thisMode,
    env,
    privateEnv,
    strict,
    prototype: functionPrototype,
    scriptOrModule,
  });

  const len = expectedArgumentCount(parameterList);
  yield* setFunctionLength(func, len);

  return func;
}

function isStrict(body: Function | ObjectMethod | ClassMethod | ClassPrivateMethod): boolean {
  if ("body" in body && isBlockStatement(body.body)) {
    const hasStrict = body.body.directives.some(
      (directive) => directive.value.value === "use strict",
    );
    if (hasStrict) {
      return true;
    }
  }

  return EvaluationContext.current.strict;
}
