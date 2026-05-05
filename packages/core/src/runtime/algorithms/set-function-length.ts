import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsFunction } from "../types/StaticJsFunction.js";
import { StaticJsNumber } from "../types/StaticJsNumber.js";

import { definePropertyOrThrow } from "./define-property-or-throw.js";

export function* setFunctionLength(
  func: StaticJsFunction,
  length: number | StaticJsNumber,
): EvaluationGenerator<void> {
  // The spec says to assert we have no own propery length here,
  // but currently we set that on function creation.

  yield* definePropertyOrThrow(func, "length", {
    value: typeof length === "number" ? func.realm.types.number(length) : length,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
