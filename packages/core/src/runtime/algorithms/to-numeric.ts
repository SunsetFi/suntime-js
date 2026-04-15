import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { toNumber } from "./to-number.js";
import { toPrimitive } from "./to-primitive.js";

export function* toNumeric(
  value: StaticJsValue,
  _realm: StaticJsRealm,
): EvaluationGenerator<StaticJsNumber> {
  const primValue = yield* toPrimitive(value, "number");
  // BigNum should go here.
  return yield* toNumber(primValue);
}
