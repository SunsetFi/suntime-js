import { ArrowFunctionExpression, ObjectMethod, type Function } from "@babel/types";

import {
  setFunctionName,
  StaticJsFunctionNameable,
} from "../../runtime/algorithms/set-function-name.js";
import { StaticJsPrivateEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { StaticJsAstFunction } from "../../runtime/types/implementation/functions/StaticJsAstFunction.js";
import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import { EvaluationContext } from "../EvaluationContext.js";

import { getNamedEvaluationParameter } from "./NamedEvaluation.js";

// This is a mess of OrdinaryFunctionCreate and InstantiateOrdinary*FunctionObject
export function createFunction(
  node: Function,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  // HACK: Shim while we untangle instantiateOrdinaryFunctionObject / instantiateOrdinaryFunctionExpression
  // This is all over the place, but we still need This One Entrypoint because of circular dependencies with
  // StaticJsAstFunction.

  if (node.type === "ObjectMethod") {
    return createObjectMethodFunction(node, env, privateEnv);
  }

  if (node.type === "ArrowFunctionExpression") {
    // HACK: This looks gross here, but if we move this into the ArrowFunctionExpression node evaluator,
    // we get circular imports.
    // Probably just put this in a parallel file?  Or will that be circular too?
    return instantiateArrowFunctionExpression(
      node,
      getNamedEvaluationParameter() ?? null,
      env,
      privateEnv,
    );
  }

  return instantiateFunctionObject(node, env, privateEnv);
}

function createObjectMethodFunction(
  node: ObjectMethod,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  const { strict, scriptOrModule, realm } = EvaluationContext.current;
  const func = new StaticJsAstFunction(realm, node, {
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

function instantiateArrowFunctionExpression(
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
  });

  // TODO Generator!
  realm.invokeEvaluatorSync(setFunctionName(func, name));

  return func;
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
      // TODO: Generator
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  // TODO: Remove construct: true from above and call makeConstructor

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
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
): StaticJsFunction {
  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new StaticJsAstFunction(
    realm,
    node,
    // FIXME: Prototype should be asyncFunctionPrototype, once we get one.
    {
      thisMode: "non-lexical-this",
      strict,
      scriptOrModule,
      env,
      privateEnv,
      construct: false,
    },
  );

  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
      // TODO: Generator
      realm.invokeEvaluatorSync(setFunctionName(func, node.id?.name ?? "default"));
  }

  return func;
}
