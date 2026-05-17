import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { StaticJsAsyncGeneratorImpl } from "../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";
import { StaticJsGeneratorImpl } from "../types/implementation/functions/StaticJsGeneratorImpl.js";

export function* getGeneratorKind() {
  const generator = EvaluationContext.current.generator;
  if (!generator) {
    return "non-generator";
  }

  if (generator instanceof StaticJsAsyncGeneratorImpl) {
    return "async";
  }

  if (generator instanceof StaticJsGeneratorImpl) {
    return "sync";
  }

  throw new StaticJsEngineError("Unknown generator type.");
}
