import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

import { iteratorStepValue } from "./iterator-step-value.js";

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
