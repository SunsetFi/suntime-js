import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import toNumber from "./to-number.js";

function* toUint16(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsNumber> {
  const number = yield* toNumber(value, realm);
  const int = toUint16Native(number.value);
  return realm.types.number(int);
}

toUint16.native = toUint16Native;

function toUint16Native(value: string | number): number {
  const number = Number(value);
  if (Number.isFinite(number) === false || number === 0) {
    return 0;
  }

  const int = Math.trunc(number);
  const int16Bit = int % 2 ** 16;
  return int16Bit;
}

export default toUint16;
