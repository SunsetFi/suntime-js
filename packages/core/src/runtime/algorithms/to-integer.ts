import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toNumber from "./to-number.js";

function* toInteger(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsNumber> {
  value = yield* toNumber(value, realm);
  return realm.types.number(Math.trunc(value.value));
}

toInteger.js = function* js(value: StaticJsValue, realm: StaticJsRealm) {
  const number = yield* toNumber(value, realm);
  return number.value;
};

export default toInteger;
