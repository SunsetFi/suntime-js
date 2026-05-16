import { isFunction } from "@babel/types";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { StaticJsAstFunction } from "../types/implementation/functions/StaticJsAstFunction.js";

export function* getGeneratorKind() {
  const func = EvaluationContext.current.function;
  if (func instanceof StaticJsAstFunction === false) {
    return "sync";
  }

  return isFunction(func.ecmaScriptCode) &&
    func.ecmaScriptCode.generator &&
    func.ecmaScriptCode.async
    ? "async"
    : "sync";
}
