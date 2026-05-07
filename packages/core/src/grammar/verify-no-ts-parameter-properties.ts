import { FunctionParameter, TSParameterProperty } from "@babel/types";

import { StaticJsEngineError } from "../errors/StaticJsEngineError.js";

export function verifyNoTsParameterProperties(
  parameters: FunctionParameter[] | (FunctionParameter | TSParameterProperty)[],
): asserts parameters is FunctionParameter[] {
  for (const param of parameters) {
    if (param.type === "TSParameterProperty") {
      throw new StaticJsEngineError("Parameter properties are not supported.");
    }
  }
}
