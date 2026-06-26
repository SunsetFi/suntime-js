import type { ArrowFunctionExpression } from "@babel/types";

import { StaticJsPrivateEnvironmentRecord } from "#environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import type { StaticJsEnvironmentRecord } from "#environments/StaticJsEnvironmentRecord.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsFunction } from "#types/StaticJsFunction.js";

import { ordinaryFunctionCreate } from "./ordinary-function-create.js";
import { setFunctionName, type StaticJsFunctionNameable } from "./set-function-name.js";

export function* instantiateArrowFunctionExpression(
  node: ArrowFunctionExpression,
  name: StaticJsFunctionNameable | null,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsFunction> {
  if (!name) {
    name = "";
  }

  const { realm, scriptOrModule } = EvaluationContext.current;

  const proto = node.async
    ? realm.intrinsics["AsyncFunction.prototype"]
    : realm.intrinsics["Function.prototype"];

  const sourceString = scriptOrModule?.ecmaScriptSource.slice(node.start!, node.end!) ?? "";
  const func = yield* ordinaryFunctionCreate(
    proto,
    sourceString,
    node.params,
    node,
    "lexical-this",
    env,
    privateEnv,
  );

  yield* setFunctionName(func, name);

  return func;
}
