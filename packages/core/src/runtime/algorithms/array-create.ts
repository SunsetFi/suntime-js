import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsArrayImpl } from "../types/implementation/objects/StaticJsArrayImpl.js";
import { StaticJsArray } from "../types/StaticJsArray.js";
import { StaticJsObject } from "../types/StaticJsObject.js";

export function* arrayCreate(
  length: number,
  proto?: StaticJsObject,
): EvaluationGenerator<StaticJsArray> {
  if (length > 2 ** 32 - 1) {
    throw Completion.Throw("RangeError", "Invalid array length");
  }

  const A = new StaticJsArrayImpl(EvaluationContext.current.realm, length, proto);
  return A;
}
