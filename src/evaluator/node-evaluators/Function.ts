import { Function } from "@babel/types";

import StaticJsAstFunction, {
  StaticJsAstFunctionArgumentDeclaration,
} from "../../runtime/primitives/implementation/StaticJsAstFunction.js";

import EvaluationContext from "../EvaluationContext.js";
import { StaticJsFunction } from "../../runtime/index.js";

export default function createFunction(
  name: string | null,
  node: Function,
  functionContext: EvaluationContext,
): StaticJsFunction {
  if (node.async) {
    // TODO: Support these when the Promise primitive is in.
    throw new Error("Async functions are not supported");
  }

  if (node.generator) {
    // TODO: Support these when an Iterator primitive is in.
    throw new Error("Generator functions are not supported");
  }

  if (node.params.some((x) => x.type === "TSParameterProperty")) {
    throw new Error("TypeScript parameter properties are not supported");
  }

  return new StaticJsAstFunction(
    name,
    node.params as StaticJsAstFunctionArgumentDeclaration[],
    functionContext,
    node.body,
  );
}
