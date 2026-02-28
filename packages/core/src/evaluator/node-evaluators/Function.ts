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
import StaticJsGeneratorDeclFunction from "../../runtime/types/implementation/StaticJsGeneratorDeclFunction.js";

import type EvaluationContext from "../EvaluationContext.js";

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
      method: createNotSupported("Generator methods are not supported"),
      arrow: createNotSupported("Generator arrow functions are not supported"),
      class: createNotSupported("Generator class methods are not supported"),
    },
    normal: {
      declaration: StaticJsDeclFunction,
      method: StaticJsMethodFunction,
      arrow: StaticJsArrowFunction,
      class: createNotSupported("Class methods are not supported"),
    },
  },
  async: {
    generator: {
      declaration: createNotSupported("Async generator functions are not supported"),
      method: createNotSupported("Async generator methods are not supported"),
      arrow: createNotSupported("Async generator arrow functions are not supported"),
      class: createNotSupported("Async generator class methods are not supported"),
    },
    normal: {
      declaration: StaticJsAsyncDeclFunction,
      method: StaticJsAsyncMethodFunction,
      arrow: StaticJsAsyncArrowFunction,
      class: createNotSupported("Async class methods are not supported"),
    },
  },
};

export default function createFunction(
  name: string | null,
  node: Function,
  context: EvaluationContext,
): StaticJsFunction {
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
      throw new StaticJsEngineError(
        // @ts-expect-error - Should be unreachable due to babel types, but just in case.
        `Unsupported function node type ${node.type}`,
      );
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
