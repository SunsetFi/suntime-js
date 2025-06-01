import { Function } from "@babel/types";

import StaticJsAstFunction, {
  StaticJsAstFunctionArgumentDeclaration,
} from "../../runtime/types/implementation/StaticJsAstFunction.js";
import { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import EvaluationContext from "../EvaluationContext.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export default function createFunction(
  name: string | null,
  node: Function,
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
    node.params as StaticJsAstFunctionArgumentDeclaration[],
    functionContext,
    node.body,
  );
}
