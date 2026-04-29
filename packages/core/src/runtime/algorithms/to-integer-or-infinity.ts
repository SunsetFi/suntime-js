import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { toNumber } from "./to-number.js";

export function* toIntegerOrInfinity(value: StaticJsValue): EvaluationGenerator<StaticJsNumber> {
  const number = yield* toIntegerOrInfinity.js(value);
  return EvaluationContext.current.realm.types.number(number);
}

toIntegerOrInfinity.js = function* js(
  value: StaticJsValue | number | string,
): EvaluationGenerator<number> {
  const number = typeof value === "number" ? value : yield* toNumber.js(value);
  if (Number.isNaN(number) || number === 0) {
    return 0;
  }

  if (number === Infinity || number === -Infinity) {
    return number;
  }

  return Math.trunc(number);
};
