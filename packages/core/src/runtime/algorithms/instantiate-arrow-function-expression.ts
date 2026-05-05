import { ArrowFunctionExpression } from "@babel/types";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { StaticJsPrivateEnvironmentRecord } from "../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsAstFunction } from "../types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsFunction } from "../types/StaticJsFunction.js";

import { setFunctionName, StaticJsFunctionNameable } from "./set-function-name.js";

export function instantiateArrowFunctionExpression(
  node: ArrowFunctionExpression,
  name: StaticJsFunctionNameable | null,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  if (!name) {
    name = "";
  }

  const { strict, scriptOrModule, realm } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, node, {
    thisMode: "lexical-this",
    strict,
    scriptOrModule,
    env,
    privateEnv,
    construct: false,
    prototype: node.async
      ? realm.intrinsics["AsyncFunction.prototype"]
      : realm.intrinsics["Function.prototype"],
  });

  // TODO Generator!
  realm.invokeEvaluatorSync(setFunctionName(func, name));

  return func;
}
