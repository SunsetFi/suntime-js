import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import typedMerge from "../../internal/typed-merge.js";

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

export default typedMerge(toInteger, {
  *js(value: StaticJsValue, realm: StaticJsRealm) {
    const number = yield* toNumber(value, realm);
    return number.value;
  },
});
