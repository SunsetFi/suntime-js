import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsNull, StaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined, StaticJsUndefined } from "../types/StaticJsUndefined.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function* requireObjectCoercible(argument: StaticJsValue): EvaluationGenerator<void> {
  if (isStaticJsUndefined(argument) || isStaticJsNull(argument)) {
    throw yield* Completion.Throw.create("TypeError", "Cannot convert undefined or null to object");
  }
}

requireObjectCoercible.enforce = function (
  _value: StaticJsValue,
): asserts _value is Exclude<StaticJsValue, StaticJsNull | StaticJsUndefined> {};
