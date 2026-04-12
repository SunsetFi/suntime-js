import { ClassMethod, ObjectMethod, type Function } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import { StaticJsDeclFunction } from "../../runtime/types/implementation/functions/StaticJsDeclFunction.js";
import { StaticJsAsyncDeclFunction } from "../../runtime/types/implementation/functions/StaticJsAsyncDeclFunction.js";
import {
  isStaticJsAstFunctionArgumentDeclaration,
  type StaticJsAstFunctionArgument,
} from "../../runtime/types/implementation/functions/StaticJsAstFunctionArgument.js";
import { StaticJsAsyncArrowFunction } from "../../runtime/types/implementation/functions/StaticJsAsyncArrowFunction.js";
import { StaticJsArrowFunction } from "../../runtime/types/implementation/functions/StaticJsArrowFunction.js";
import { StaticJsAsyncMethodFunction } from "../../runtime/types/implementation/functions/StaticJsAsyncMethodFunction.js";
import { StaticJsObjectMethodFunction } from "../../runtime/types/implementation/functions/StaticJsObjectMethodFunction.js";
import { StaticJsGeneratorDeclFunction } from "../../runtime/types/implementation/functions/StaticJsGeneratorDeclFunction.js";
import { StaticJsAsyncGeneratorDeclFunction } from "../../runtime/types/implementation/functions/StaticJsAsyncGeneratorDeclFunction.js";
import { StaticJsGeneratorMethodFunction } from "../../runtime/types/implementation/functions/StaticJsGeneratorMethodFunction.js";
import { StaticJsClassMethodFunction } from "../../runtime/types/implementation/functions/StaticJsClassMethodFunction.js";

import { StaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";

import { setFunctionName } from "../../runtime/algorithms/set-function-name.js";

import { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { StaticJsPrivateEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";

import { EvaluationContext } from "../EvaluationContext.js";
import { StaticJsName } from "../StaticJsName.js";

interface NeverConstructor {
  (): never;
  new (): never;
}

function createNotSupported(message: string): NeverConstructor {
  return function () {
    throw new StaticJsEngineError(message);
  } as NeverConstructor;
}

const FunctionConstructorMap = {
  sync: {
    generator: {
      declaration: StaticJsGeneratorDeclFunction,
      arrow: createNotSupported("Generator arrow functions are not supported"),
      method: StaticJsGeneratorDeclFunction,
    },
    normal: {
      declaration: StaticJsDeclFunction,
      arrow: StaticJsArrowFunction,
      method: StaticJsObjectMethodFunction,
    },
  },
  async: {
    generator: {
      declaration: StaticJsAsyncGeneratorDeclFunction,
      arrow: createNotSupported("Async generator arrow functions are not supported"),
      method: StaticJsAsyncGeneratorDeclFunction,
    },
    normal: {
      declaration: StaticJsAsyncDeclFunction,
      arrow: StaticJsAsyncArrowFunction,
      method: StaticJsAsyncDeclFunction,
    },
  },
};

export function createFunction(
  name: StaticJsName | null,
  node: Function,
  env: StaticJsEnvironmentRecord,
): StaticJsFunction {
  const params = node.params;
  validateParams(params);

  const syncMode = node.async ? "async" : "sync";
  const generatorMode = node.generator ? "generator" : "normal";
  let type: "declaration" | "method" | "arrow";
  switch (node.type) {
    case "ArrowFunctionExpression":
      type = "arrow";
      break;
    case "FunctionDeclaration":
    case "FunctionExpression":
      type = "declaration";
      break;
    case "ObjectMethod":
      type = "method";
      break;
    case "ClassMethod":
    case "ClassPrivateMethod":
      throw new StaticJsEngineError("Class methods should be created with createMethodFunction");
    default:
      throw new StaticJsEngineError(
        // @ts-expect-error - Should be unreachable due to babel types, but just in case.
        `Unsupported function node type ${node.type}`,
      );
  }

  const Ctor = FunctionConstructorMap[syncMode][generatorMode][type];

  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new Ctor(realm, params, node, { strict, scriptOrModule, env }, createFunction);
  // Sigh...
  // This really should be an evaluator.
  // Since we are creating the function, we know this will be sync and not
  // run forever.
  realm.invokeEvaluatorSync(setFunctionName(func, name ?? ""));

  return func;
}

const MethodConstructorMap = {
  sync: {
    generator: StaticJsGeneratorMethodFunction,
    normal: StaticJsClassMethodFunction,
  },
  async: {
    // FIXME: Needs to be a method with a homeObject
    generator: StaticJsAsyncGeneratorDeclFunction,
    normal: StaticJsAsyncMethodFunction,
  },
};

export function createClassMethodFunction(
  name: string | null,
  node: ObjectMethod | ClassMethod,
  env: StaticJsEnvironmentRecord,
  privateEnv: StaticJsPrivateEnvironmentRecord | null,
  homeObject: StaticJsObjectLike,
  prototype: StaticJsObjectLike,
): StaticJsFunction {
  const params = node.params;
  validateParams(params);

  const syncMode = node.async ? "async" : "sync";
  const generatorMode = node.generator ? "generator" : "normal";

  const Ctor = MethodConstructorMap[syncMode][generatorMode];

  const { realm, strict, scriptOrModule } = EvaluationContext.current;
  const func = new Ctor(
    realm,
    params,
    node,
    { strict, scriptOrModule, env, privateEnv, homeObject, prototype },
    createFunction,
  );

  // Sigh...
  // This really should be an evaluator.
  // Since we are creating the function, we know this will be sync and not
  // run forever.
  realm.invokeEvaluatorSync(setFunctionName(func, name ?? ""));

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
