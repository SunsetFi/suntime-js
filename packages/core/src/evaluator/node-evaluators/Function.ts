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

import type EvaluationContext from "../EvaluationContext.js";
import StaticJsAsyncMethodFunction from "../../runtime/types/implementation/StaticJsAsyncMethodFunction.js";
import StaticJsMethodFunction from "../../runtime/types/implementation/StaticJsMethodFunction.js";

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

  let ctor:
    | typeof StaticJsAsyncDeclFunction
    | typeof StaticJsDeclFunction
    | typeof StaticJsAsyncArrowFunction
    | typeof StaticJsArrowFunction
    | typeof StaticJsAsyncMethodFunction
    | typeof StaticJsMethodFunction;

  switch (node.type) {
    case "ArrowFunctionExpression":
      ctor = node.async ? StaticJsAsyncArrowFunction : StaticJsArrowFunction;
      break;
    case "FunctionDeclaration":
    case "FunctionExpression":
      ctor = node.async ? StaticJsAsyncDeclFunction : StaticJsDeclFunction;
      break;
    case "ObjectMethod":
      ctor = node.async ? StaticJsAsyncMethodFunction : StaticJsMethodFunction;
      break;
    default:
      throw new StaticJsEngineError(`Unsupported function node type ${node.type}`);
  }

  return new ctor(context.realm, name, params, context, node.body, createFunction);
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
