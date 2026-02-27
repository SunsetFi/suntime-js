import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toNumber from "./to-number.js";
import toPrimitive from "./to-primitive.js";

export default function* toNumeric(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsNumber> {
  const primValue = yield* toPrimitive(value, "number", realm);
  // BigNum should go here.
  return yield* toNumber(primValue, realm);
}
