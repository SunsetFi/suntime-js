import { call } from "../algorithms/call.js";
import { Completion } from "../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { isStaticJsObject, type StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* iteratorNext(
  iteratorRecord: StaticJsIteratorRecord,
  value: StaticJsValue | null = null,
): EvaluationGenerator<StaticJsObject> {
  let result: StaticJsValue;
  try {
    if (!value) {
      result = yield* call(iteratorRecord.nextMethod, iteratorRecord.iterator, []);
    } else {
      result = yield* call(iteratorRecord.nextMethod, iteratorRecord.iterator, [value]);
    }
  } catch (e) {
    if (Completion.Throw.is(e)) {
      iteratorRecord.done = true;
    }

    throw e;
  }

  if (!isStaticJsObject(result)) {
    iteratorRecord.done = true;
    throw yield* Completion.Throw.create("TypeError", "Result of iterator next is not an object");
  }

  return result;
}
