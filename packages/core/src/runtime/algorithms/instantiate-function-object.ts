import { Function } from "@babel/types";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { StaticJsPrivateEnvironmentRecord } from "../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsAstFunction } from "../types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsFunction } from "../types/StaticJsFunction.js";

import { setFunctionName } from "./set-function-name.js";

export function instantiateFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
) {
  if (node.async) {
    if (node.generator) {
      return instantiateAsyncGeneratorFunctionObject(node, env, privateEnv);
    }

    return instantiateAsyncFunctionObject(node, env, privateEnv);
  } else if (node.generator) {
    return instantiateGeneratorFunctionObject(node, env, privateEnv);
  }

  return instantiateOrdinaryFunctionObject(node, env, privateEnv);
}

function instantiateOrdinaryFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, node, {
    thisMode: "non-lexical-this",
    strict,
    scriptOrModule,
    env,
    privateEnv,
    construct: true,
  });

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  return func;
}

function instantiateGeneratorFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, node, {
    thisMode: "non-lexical-this",
    strict,
    scriptOrModule,
    env,
    privateEnv,
    construct: false,
    prototype: realm.intrinsics["GeneratorFunction.prototype"],
  });

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  func.defineOwnPropertySync("prototype", {
    value: realm.types.object({}, realm.intrinsics["GeneratorPrototype"]),
    writable: true,
    enumerable: false,
    configurable: false,
  });
  return func;
}

function instantiateAsyncGeneratorFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, node, {
    thisMode: "non-lexical-this",
    strict,
    scriptOrModule,
    env,
    privateEnv,
    construct: false,
    prototype: realm.intrinsics["AsyncGeneratorFunction.prototype"],
  });

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  func.defineOwnPropertySync("prototype", {
    value: realm.types.object({}, realm.intrinsics["AsyncGeneratorPrototype"]),
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return func;
}

function instantiateAsyncFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, node, {
    thisMode: "non-lexical-this",
    strict,
    scriptOrModule,
    env,
    privateEnv,
    construct: false,
    prototype: realm.intrinsics["AsyncFunction.prototype"],
  });

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      // TODO: Generator
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  return func;
}
