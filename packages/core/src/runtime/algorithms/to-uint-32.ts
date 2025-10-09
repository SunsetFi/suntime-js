import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

import toNumber from "./to-number.js";

function* toUInt32(
  value: StaticJsValue | string | number,
  realm: StaticJsRealm,
): EvaluationGenerator<number> {
  let number: number;
  if (typeof value === "number") {
    number = value;
  } else if (typeof value === "string") {
    number = Number(value);
  } else {
    const num = yield* toNumber(value, realm);
    number = num.value;
  }

  if (Number.isFinite(number) === false || number === 0) {
    return 0;
  }

  const int = Math.trunc(number);
  const int32Bit = int % 2 ** 32;
  return int32Bit;
}

export default typedMerge(toUInt32, {
  sync(value: string | number): number {
    if (typeof value !== "number") {
      value = Number(value);
    }

    if (Number.isFinite(value) === false || value === 0) {
      return 0;
    }

    const int = Math.trunc(value);
    const int32Bit = int % 2 ** 32;
    return int32Bit;
  },
});
