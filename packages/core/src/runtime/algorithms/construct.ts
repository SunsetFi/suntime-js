import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function* construct(
  F: StaticJsCallable,
  args: StaticJsValue[] = [],
  newTarget: StaticJsCallable | undefined = undefined,
): EvaluationGenerator<StaticJsObjectLike> {
  if (newTarget === undefined) {
    newTarget = F;
  } else if (newTarget !== F) {
    // FXIME: newTarget
    throw new StaticJsEngineError("newTarget is not yet supported on construct");
  }

  return yield* F.constructEvaluator(args);
}
