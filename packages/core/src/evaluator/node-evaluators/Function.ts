import type { Function } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { StaticJsAstFunctionArgumentDeclaration } from "../../runtime/types/implementation/StaticJsAstFunction.js";
import StaticJsAstFunction from "../../runtime/types/implementation/StaticJsAstFunction.js";

import type EvaluationContext from "../EvaluationContext.js";

export default function createFunction(
  name: string | null,
  node: Function,
  thisMode: "lexical" | "strict",
  functionContext: EvaluationContext,
): StaticJsFunction {
  if (node.async) {
    // TODO: Support these when the Promise primitive is in.
    throw new StaticJsEngineError("Async functions are not supported");
  }

  if (node.generator) {
    // TODO: Support these when an Iterator primitive is in.
    throw new StaticJsEngineError("Generator functions are not supported");
  }

  if (node.params.some((x) => x.type === "TSParameterProperty")) {
    throw new StaticJsEngineError(
      "TypeScript parameter properties are not supported",
    );
  }

  return new StaticJsAstFunction(
    functionContext.realm,
    name,
    thisMode,
    node.params as StaticJsAstFunctionArgumentDeclaration[],
    functionContext,
    node.body,
  );
}
