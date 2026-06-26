import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsCallable } from "../runtime/types/StaticJsCallable.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

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
