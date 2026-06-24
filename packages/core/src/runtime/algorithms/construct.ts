import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsCallable } from "../types/StaticJsCallable.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function* construct(
  F: StaticJsCallable,
  args: StaticJsValue[] = [],
  newTarget: StaticJsCallable | undefined = undefined,
): EvaluationGenerator<StaticJsObject> {
  if (newTarget === undefined) {
    newTarget = F;
  }

  return yield* F.constructEvaluator(args, newTarget);
}
