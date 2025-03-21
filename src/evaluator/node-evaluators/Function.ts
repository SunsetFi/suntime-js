import { Function } from "@babel/types";

import { StaticJsEnvironment } from "../../environment/index.js";
import StaticJsEnvFunction, {
  StaticJsEnvFunctionArgumentDeclaration,
} from "../../environment/types/implementation/StaticJsEnvFunction.js";

export default function functionNodeEvaluator(
  name: string | null,
  node: Function,
  env: StaticJsEnvironment,
) {
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

  return new StaticJsEnvFunction(
    name,
    node.params as StaticJsEnvFunctionArgumentDeclaration[],
    node.body,
  );
}
