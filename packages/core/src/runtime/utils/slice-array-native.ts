import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsArray } from "../types/StaticJsArray.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* sliceArrayNative(
  array: StaticJsArray,
  start = 0,
  end?: number,
): EvaluationGenerator<StaticJsValue[]> {
  if (end == null) {
    end = yield* array.getLengthEvaluator();
  }

  const copy = new Array<StaticJsValue>();
  for (let i = start; i < end; i++) {
    // Reproduce gaps.
    const hasProperty = yield* array.hasPropertyEvaluator(i.toString());
    if (!hasProperty) {
      const length = copy.push(array.realm.types.undefined);
      delete copy[length - 1];
      continue;
    }

    const value = yield* array.getEvaluator(String(i));
    copy.push(value);
  }

  return copy;
}
