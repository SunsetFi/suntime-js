import { Completion } from "../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { isStaticJsNull, type StaticJsNull } from "../runtime/types/StaticJsNull.js";
import { isStaticJsUndefined, type StaticJsUndefined } from "../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function* requireObjectCoercible(argument: StaticJsValue): EvaluationGenerator<void> {
  if (isStaticJsUndefined(argument) || isStaticJsNull(argument)) {
    throw yield* Completion.Throw.create("TypeError", "Cannot convert undefined or null to object");
  }
}

requireObjectCoercible.enforce = function (
  _value: StaticJsValue,
): asserts _value is Exclude<StaticJsValue, StaticJsNull | StaticJsUndefined> {};
