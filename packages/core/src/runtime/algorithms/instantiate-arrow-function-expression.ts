import { ArrowFunctionExpression } from "@babel/types";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsPrivateEnvironmentRecord } from "../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsFunction } from "../types/StaticJsFunction.js";

import { ordinaryFunctionCreate } from "./ordinary-function-create.js";
import { setFunctionName, StaticJsFunctionNameable } from "./set-function-name.js";

export function* instantiateArrowFunctionExpression(
  node: ArrowFunctionExpression,
  name: StaticJsFunctionNameable | null,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsFunction> {
  if (!name) {
    name = "";
  }

  const { realm } = EvaluationContext.current;

  const proto = node.async
    ? realm.intrinsics["AsyncFunction.prototype"]
    : realm.intrinsics["Function.prototype"];

  const func = yield* ordinaryFunctionCreate(
    proto,
    node.params,
    node,
    "lexical-this",
    env,
    privateEnv,
  );

  yield* setFunctionName(func, name);

  return func;
}
