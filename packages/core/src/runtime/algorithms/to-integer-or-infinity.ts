import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toNumber from "./to-number.js";

export default function* toIntegerOrInfinity(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsNumber> {
  const number = yield* toIntegerOrInfinity.js(value, realm);
  return realm.types.number(number);
}

toIntegerOrInfinity.js = function* js(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<number> {
  const number = yield* toNumber.js(value, realm);
  if (Number.isNaN(number) || number === 0) {
    return 0;
  }

  if (number === Infinity || number === -Infinity) {
    return number;
  }

  return Math.trunc(number);
};
