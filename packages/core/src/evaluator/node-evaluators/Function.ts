import { type Function } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import StaticJsDeclFunction from "../../runtime/types/implementation/StaticJsDeclFunction.js";
import StaticJsAsyncDeclFunction from "../../runtime/types/implementation/StaticJsAsyncDeclFunction.js";
import {
  isStaticJsAstFunctionArgumentDeclaration,
  type StaticJsAstFunctionArgument,
} from "../../runtime/types/implementation/StaticJsAstFunctionArgument.js";
import StaticJsAsyncArrowFunction from "../../runtime/types/implementation/StaticJsAsyncArrowFunction.js";
import StaticJsArrowFunction from "../../runtime/types/implementation/StaticJsArrowFunction.js";
import StaticJsAsyncMethodFunction from "../../runtime/types/implementation/StaticJsAsyncMethodFunction.js";
import StaticJsMethodFunction from "../../runtime/types/implementation/StaticJsMethodFunction.js";

import type EvaluationContext from "../EvaluationContext.js";

interface NeverConstructor {
  (): never;
  new (): never;
}

const GeneratorNotSupported: NeverConstructor = function () {
  throw new StaticJsEngineError("Generator functions are not supported");
} as NeverConstructor;

const ClassNotSupported: NeverConstructor = function () {
  throw new StaticJsEngineError("Class methods are not supported");
} as NeverConstructor;

const FunctionConstructorMap = {
  sync: {
    generator: {
      declaration: GeneratorNotSupported,
      method: GeneratorNotSupported,
      arrow: GeneratorNotSupported,
      class: ClassNotSupported,
    },
    normal: {
      declaration: StaticJsDeclFunction,
      method: StaticJsMethodFunction,
      arrow: StaticJsArrowFunction,
      class: ClassNotSupported,
    },
  },
  async: {
    generator: {
      declaration: GeneratorNotSupported,
      method: GeneratorNotSupported,
      arrow: GeneratorNotSupported,
      class: ClassNotSupported,
    },
    normal: {
      declaration: StaticJsAsyncDeclFunction,
      method: StaticJsAsyncMethodFunction,
      arrow: StaticJsAsyncArrowFunction,
      class: ClassNotSupported,
    },
  },
};

export default function createFunction(
  name: string | null,
  node: Function,
  context: EvaluationContext,
): StaticJsFunction {
  if (node.generator) {
    // TODO: Support these when an Iterator primitive is in.
    // Note for the future, Generator function's 'prototype' is used to create the iterator,
    // and is not constructable/
    throw new StaticJsEngineError("Generator functions are not supported");
  }

  const params = node.params;
  validateParams(params);

  const syncMode = node.async ? "async" : "sync";
  const generatorMode = node.generator ? "generator" : "normal";
  let type: "declaration" | "method" | "arrow" | "class";
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
      type = "class";
      break;
    default:
      // @ts-expect-error - Should be unreachable due to babel types, but just in case.
      throw new StaticJsEngineError(`Unsupported function node type ${node.type}`);
  }

  const Ctor = FunctionConstructorMap[syncMode][generatorMode][type];
  return new Ctor(context.realm, name, params, context, node.body, createFunction);
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
