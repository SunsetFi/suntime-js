import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsCallable } from "#types/StaticJsCallable.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { call } from "#algorithms/call.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { isStaticJsObject } from "#types/StaticJsObject.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

import { getIteratorDirect } from "./get-iterator-direct.js";

export function* getIteratorFromMethod(
  obj: StaticJsValue,
  method: StaticJsCallable,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const iterator = yield* call(method, obj);
  if (!isStaticJsObject(iterator)) {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Result of the iterator method is not an object",
    );
  }

  return yield* getIteratorDirect(iterator);
}
