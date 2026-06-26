import { Completion } from "../evaluator/completions/Completion.js";
import { EvaluationContext } from "../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { StaticJsArrayImpl } from "../runtime/types/implementation/objects/StaticJsArrayImpl.js";
import type { StaticJsArray } from "../runtime/types/StaticJsArray.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";

export function* arrayCreate(
  length: number,
  proto?: StaticJsObject,
): EvaluationGenerator<StaticJsArray> {
  if (length > 2 ** 32 - 1) {
    throw yield* Completion.Throw.create("RangeError", "Invalid array length");
  }

  const A = new StaticJsArrayImpl(EvaluationContext.current.realm, length, proto);
  return A;
}
