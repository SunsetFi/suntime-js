import {
  ArrowFunctionExpression,
  ClassMethod,
  ClassPrivateMethod,
  type Function,
} from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import {
  isStaticJsAstFunctionArgumentDeclaration,
  StaticJsAstFunction,
  StaticJsAstFunctionArgument,
} from "../../runtime/types/implementation/functions/StaticJsAstFunction.js";

import { StaticJsObject } from "../../runtime/types/StaticJsObject.js";

import { setFunctionName } from "../../runtime/algorithms/set-function-name.js";

import { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { StaticJsPrivateEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";

import { EvaluationContext } from "../EvaluationContext.js";
import { StaticJsClassMethodFunction } from "../../runtime/types/implementation/functions/StaticJsClassMethodFunction.js";
import { StaticJsName } from "../StaticJsName.js";
import { getNamedEvaluationParameter } from "./NamedEvaluation.js";

// This is a mess of OrdinaryFunctionCreate and InstantiateOrdinary*FunctionObject
export function createFunction(node: Function, env: StaticJsEnvironmentRecord): StaticJsFunction {
  // HACK: Shim while we untangle instantiateOrdinaryFunctionObject / instantiateOrdinaryFunctionExpression
  // This is all over the place, but we still need This One Entrypoint because of circular dependencies with
  // StaticJsAstFunction.

  if (node.type === "ObjectMethod") {
    // FIXME: I can't find the spec for this.  Assuming based on test262 failures.
    validateParams(node.params);
    const {
      lexicalEnv: env,
      privateEnv,
      strict,
      scriptOrModule,
      realm,
    } = EvaluationContext.current;
    const func = new StaticJsAstFunction(realm, null, node.params, node, {
      thisMode: "non-lexical-this",
      strict,
      scriptOrModule,
      env,
      privateEnv,
      construct: false,
    });

    realm.invokeEvaluatorSync(
      setFunctionName(func, node.key.type === "Identifier" ? node.key.name : ""),
    );

    // Do not define prototype.
    return func;
  }

  if (node.type === "ArrowFunctionExpression") {
    // HACK: This looks gross here, but if we move this into the ArrowFunctionExpression node evaluator,
    // we get circular imports.
    // Probably just put this in a parallel file?  Or will that be circular too?
    return instantiateArrowFunctionExpression(node, getNamedEvaluationParameter() ?? undefined);
  }

  return instantiateFunctionObject(node, env);
}

export function createClassMethodFunction(
  node: ClassMethod | ClassPrivateMethod,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
  homeObject: StaticJsObject,
  prototype: StaticJsObject,
): StaticJsFunction {
  const params = node.params;
  validateParams(params);

  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsClassMethodFunction(realm, params, node, {
    strict,
    scriptOrModule,
    env,
    privateEnv,
    homeObject,
    prototype,
  });

  return func;
}

export function instantiateFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
  _privateEnv?: StaticJsPrivateEnvironmentRecord,
) {
  if (node.async) {
    if (node.generator) {
      return instantiateAsyncGeneratorFunctionObject(node, env);
    }

    return instantiateAsyncFunctionObject(node, env);
  } else if (node.generator) {
    return instantiateGeneratorFunctionObject(node, env);
  }

  return instantiateOrdinaryFunctionObject(node, env);
}

function instantiateArrowFunctionExpression(
  node: ArrowFunctionExpression,
  name?: StaticJsName,
): StaticJsFunction {
  if (!name) {
    name = "";
  }

  const { lexicalEnv: env, privateEnv, strict, scriptOrModule, realm } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, null, node.params, node, {
    thisMode: "lexical-this",
    strict,
    scriptOrModule,
    env,
    privateEnv,
    construct: false,
  });

  // TODO Generator!
  realm.invokeEvaluatorSync(setFunctionName(func, name));

  return func;
}

function instantiateOrdinaryFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
): StaticJsFunction {
  const params = node.params;
  validateParams(params);

  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, null, params, node, {
    thisMode: "non-lexical-this",
    strict,
    scriptOrModule,
    env,
    construct: true,
  });

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      // TODO: Generator
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  // TODO: Remove construct: true from above and call makeConstructor

  return func;
}

function instantiateGeneratorFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
): StaticJsFunction {
  const params = node.params;
  validateParams(params);

  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, null, params, node, {
    thisMode: "non-lexical-this",
    strict,
    scriptOrModule,
    env,
    construct: false,
  });

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      // TODO: Generator
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  // TODO: Generator!
  func.defineOwnPropertySync("prototype", {
    value: realm.types.object({}, realm.types.prototypes.generatorFunctionProto),
    writable: true,
    enumerable: false,
    configurable: false,
  });
  return func;
}

function instantiateAsyncGeneratorFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
): StaticJsFunction {
  const params = node.params;
  validateParams(params);

  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, null, params, node, {
    thisMode: "non-lexical-this",
    strict,
    scriptOrModule,
    env,
    construct: false,
  });

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      // TODO: Generator
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  // TODO: Generator!
  func.defineOwnPropertySync("prototype", {
    value: realm.types.object({}, realm.types.prototypes.asyncGeneratorFunctionProto),
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return func;
}

function instantiateAsyncFunctionObject(
  node: Function,
  env: StaticJsEnvironmentRecord,
): StaticJsFunction {
  const params = node.params;
  validateParams(params);

  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(
    realm,
    null,
    params,
    node,
    // FIXME: Prototype should be asyncFunctionPrototype, once we get one.
    { thisMode: "non-lexical-this", strict, scriptOrModule, env, construct: false },
  );

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      // TODO: Generator
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  return func;
}

// Making a seperate function because the typescript type guard on filter isnt working...
function validateParams(
  params: Function["params"],
): asserts params is StaticJsAstFunctionArgument[] {
  for (const param of params) {
    if (!isStaticJsAstFunctionArgumentDeclaration(param)) {
      throw new StaticJsEngineError("TypeScript parameter properties are not supported");
    }
  }
}
