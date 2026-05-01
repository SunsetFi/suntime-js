import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsNumber } from "../types/StaticJsNumber.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { toIntegerOrInfinity } from "./to-integer-or-infinity.js";

export function* toInt32(value: StaticJsValue): EvaluationGenerator<StaticJsNumber> {
  const result = yield* toInt32.js(value);
  return EvaluationContext.current.realm.types.number(result);
}

toInt32.js = function* toInt32Native(
  value: StaticJsValue | string | number,
): EvaluationGenerator<number> {
  const int = yield* toIntegerOrInfinity.js(value);
  if (!Number.isFinite(int)) {
    return 0;
  }

  const int32Bit = int % 2 ** 32;
  if (int32Bit >= 2 ** 31) {
    return int32Bit - 2 ** 32;
  }

  if (int32Bit < -(2 ** 31)) {
    return int32Bit + 2 ** 32;
  }

  return int32Bit;
};
