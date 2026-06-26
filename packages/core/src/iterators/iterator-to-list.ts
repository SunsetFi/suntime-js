import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { iteratorStepValue } from "./iterator-step-value.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* iteratorToList(
  iterator: StaticJsIteratorRecord,
): EvaluationGenerator<StaticJsValue[]> {
  const values: StaticJsValue[] = [];

  while (true) {
    const next = yield* iteratorStepValue(iterator);
    if (!next) {
      return values;
    }
    values.push(next);
  }
}
