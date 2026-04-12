import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function* construct(
  F: StaticJsCallable,
  args: StaticJsValue[] = [],
  newTarget: StaticJsCallable | undefined = undefined,
): EvaluationGenerator<StaticJsObject> {
  if (newTarget === undefined) {
    newTarget = F;
  } else if (newTarget !== F) {
    // FXIME: newTarget
    throw new StaticJsEngineError("newTarget is not yet supported on construct");
  }

  return yield* F.constructEvaluator(args);
}
