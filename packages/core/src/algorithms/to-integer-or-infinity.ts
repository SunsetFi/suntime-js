import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsNumber } from "#types/StaticJsNumber.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationContext } from "#evaluator/EvaluationContext.js";

import { toNumber } from "./to-number.js";

export function* toIntegerOrInfinity(
  value: StaticJsValue | number | string,
): EvaluationGenerator<StaticJsNumber> {
  const number = yield* toIntegerOrInfinity.js(value);
  return EvaluationContext.current.realm.types.number(number);
}

toIntegerOrInfinity.js = function* toIntegerOrInfinityJs(
  value: StaticJsValue | number | string,
): EvaluationGenerator<number> {
  const number = yield* toNumber.js(value);
  return toIntegerOrInfinity.native(number);
};

toIntegerOrInfinity.native = function toIntegerOrInfinityNative(value: number | string): number {
  if (typeof value !== "number") {
    value = Number(value);
  }

  if (Number.isNaN(value) || value === 0) {
    return 0;
  }

  if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
    return value;
  }

  return Math.trunc(value);
};
