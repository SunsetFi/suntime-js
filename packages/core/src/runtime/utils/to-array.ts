import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

import toObject from "../algorithms/to-object.js";
import lengthOfArrayLike from "../algorithms/length-of-array-like.js";

export function* toArray(val: StaticJsValue): EvaluationGenerator<StaticJsValue[]> {
  const obj = yield* toObject(val);

  const length = yield* lengthOfArrayLike(obj);

  const result: StaticJsValue[] = [];
  for (let i = 0; i < length; i++) {
    const property = String(i);
    const hasProperty = yield* obj.hasPropertyEvaluator(property);
    if (hasProperty) {
      const item = yield* obj.getEvaluator(property);
      result[i] = item;
    }
  }

  return result;
}
