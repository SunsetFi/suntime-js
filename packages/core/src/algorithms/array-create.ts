import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import { StaticJsArrayImpl } from "#types/implementation/objects/StaticJsArrayImpl.js";
import { MAX_ARRAY_LENGTH_INCLUSIVE, type StaticJsArray } from "#types/StaticJsArray.js";

export function* arrayCreate(
  length: number,
  proto?: StaticJsObject,
): EvaluationGenerator<StaticJsArray> {
  if (length > MAX_ARRAY_LENGTH_INCLUSIVE) {
    throw yield* Completion.Throw.create("RangeError", "Invalid array length");
  }

  const A = StaticJsArrayImpl.create({
    realm: EvaluationContext.current.realm,
    length,
    prototype: proto,
  });
  return A;
}

arrayCreate.safe = function (
  length: number,
  proto?: StaticJsObject,
  realm?: StaticJsRealm,
): StaticJsArray {
  if (length > MAX_ARRAY_LENGTH_INCLUSIVE) {
    throw new RangeError("Invalid array length");
  }
  return StaticJsArrayImpl.create({
    realm: realm ?? EvaluationContext.current.realm,
    length,
    prototype: proto,
  });
};
