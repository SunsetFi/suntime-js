import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toNumber from "../algorithms/to-number.js";
import toObject from "../algorithms/to-object.js";

export default function* toArray(
  val: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue[]> {
  const obj = yield* toObject(val, realm);

  let lengthValue = yield* obj.getPropertyEvaluator("length");
  lengthValue = yield* toNumber(lengthValue, realm);

  const length = lengthValue.value;

  const result: StaticJsValue[] = new Array(length);
  for (let i = 0; i < length; i++) {
    const property = String(i);
    const hasProperty = yield* obj.hasPropertyEvaluator(property);
    if (hasProperty) {
      const item = yield* obj.getPropertyEvaluator(property);
      result[i] = item;
    }
  }

  return result;
}
