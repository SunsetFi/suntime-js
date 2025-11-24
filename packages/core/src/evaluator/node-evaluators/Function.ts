import { isBlock, type Function } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import {
  isStaticJsAstFunctionArgumentDeclaration,
  type StaticJsAstFunctionArgumentDeclaration,
} from "../../runtime/types/implementation/StaticJsAstFunction.js";
import StaticJsDeclFunction from "../../runtime/types/implementation/StaticJsDeclFunction.js";
import StaticJsAsyncDeclFunction from "../../runtime/types/implementation/StaticJsAsyncDeclFunction.js";

import type EvaluationContext from "../EvaluationContext.js";

export default function createFunction(
  name: string | null,
  node: Function,
  context: EvaluationContext,
): StaticJsFunction {
  if (
    isBlock(node.body) &&
    node.body.directives.some(({ value }) => value.value === "use strict")
  ) {
    context = context.createStrictContext();
  }

  if (node.generator) {
    // TODO: Support these when an Iterator primitive is in.
    throw new StaticJsEngineError("Generator functions are not supported");
  }

  const params = node.params;
  validateParams(params);

  if (node.async) {
    return new StaticJsAsyncDeclFunction(
      context.realm,
      name,
      params,
      context,
      node.body,
    );
  }

  return new StaticJsDeclFunction(
    context.realm,
    name,
    context.strict ? "strict" : "lexical",
    params,
    context,
    node.body,
  );
}

// Making a seperate function because the typescript type guard on filter isnt working...
function validateParams(
  params: Function["params"],
): asserts params is StaticJsAstFunctionArgumentDeclaration[] {
  for (const param of params) {
    if (!isStaticJsAstFunctionArgumentDeclaration(param)) {
      throw new StaticJsEngineError(
        "TypeScript parameter properties are not supported",
      );
    }
  }
}
