import type { StaticJsArray } from "#types/StaticJsArray.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import { StaticJsArrayImpl } from "#types/implementation/objects/StaticJsArrayImpl.js";

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

arrayCreate.safe = function (length: number, proto?: StaticJsObject): StaticJsArray {
  if (length > 2 ** 32 - 1) {
    throw new RangeError("Invalid array length");
  }
  return new StaticJsArrayImpl(EvaluationContext.current.realm, length, proto);
};
