import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { call } from "../algorithms/call.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { getIteratorDirect } from "./get-iterator-direct.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* getIteratorFromMethod(
  obj: StaticJsValue,
  method: StaticJsCallable,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const iterator = yield* call(method, obj);
  if (!isStaticJsObject(iterator)) {
    throw Completion.Throw("TypeError", "Result of the iterator method is not an object");
  }

  return yield* getIteratorDirect(iterator);
}
