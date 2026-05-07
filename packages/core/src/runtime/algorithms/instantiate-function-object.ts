import { Function } from "@babel/types";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { verifyNoTsParameterProperties } from "../../grammar/verify-no-ts-parameter-properties.js";
import { StaticJsPrivateEnvironmentRecord } from "../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { StaticJsFunction } from "../types/StaticJsFunction.js";

import { ordinaryFunctionCreate } from "./ordinary-function-create.js";
import { setFunctionName } from "./set-function-name.js";

export function* instantiateFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsFunction> {
  if (node.async) {
    if (node.generator) {
      return yield* instantiateAsyncGeneratorFunctionObject(node, env, privateEnv);
    }

    return yield* instantiateAsyncFunctionObject(node, env, privateEnv);
  } else if (node.generator) {
    return yield* instantiateGeneratorFunctionObject(node, env, privateEnv);
  }

  return yield* instantiateOrdinaryFunctionObject(node, env, privateEnv);
}

function* instantiateOrdinaryFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsFunction> {
  const { realm } = EvaluationContext.current;

  verifyNoTsParameterProperties(node.params);

  const func = yield* ordinaryFunctionCreate(
    realm.intrinsics["Function.prototype"],
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      yield* setFunctionName(func, node.id?.name ?? "default");
  }

  yield* func.makeConstructor();

  return func;
}

function* instantiateGeneratorFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsFunction> {
  const { realm } = EvaluationContext.current;

  verifyNoTsParameterProperties(node.params);

  const func = yield* ordinaryFunctionCreate(
    realm.intrinsics["GeneratorFunction.prototype"],
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      yield* setFunctionName(func, node.id?.name ?? "default");
  }

  yield* func.defineOwnPropertyEvaluator("prototype", {
    value: realm.types.object({}, realm.intrinsics["GeneratorPrototype"]),
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return func;
}

function* instantiateAsyncGeneratorFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsFunction> {
  const { realm } = EvaluationContext.current;

  verifyNoTsParameterProperties(node.params);

  const func = yield* ordinaryFunctionCreate(
    realm.intrinsics["AsyncGeneratorFunction.prototype"],
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      yield* setFunctionName(func, node.id?.name ?? "default");
  }

  yield* func.defineOwnPropertyEvaluator("prototype", {
    value: realm.types.object({}, realm.intrinsics["AsyncGeneratorPrototype"]),
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return func;
}

function* instantiateAsyncFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): EvaluationGenerator<StaticJsFunction> {
  const { realm } = EvaluationContext.current;

  verifyNoTsParameterProperties(node.params);

  const func = yield* ordinaryFunctionCreate(
    realm.intrinsics["AsyncFunction.prototype"],
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      yield* setFunctionName(func, node.id?.name ?? "default");
  }

  return func;
}
