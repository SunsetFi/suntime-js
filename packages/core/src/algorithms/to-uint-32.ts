import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { toFixedSizeInteger } from "./to-fixed-size-integer.js";
import { toIntegerOrInfinity } from "./to-integer-or-infinity.js";
import { toNumber } from "./to-number.js";

export function* toUInt32(
  value: StaticJsValue | string | number,
  _realm: StaticJsRealm,
): EvaluationGenerator<number> {
  let number: number;
  if (typeof value === "number") {
    number = value;
  } else if (typeof value === "string") {
    number = Number(value);
  } else {
    number = yield* toNumber.js(value);
  }

  return toUInt32.native(number);
}

toUInt32.native = function toUInt32Native(value: string | number): number {
  const int = toIntegerOrInfinity.native(value);
  return toFixedSizeInteger(int, "unsigned", 32);
};
