import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";

import { getIteratorDirect } from "./get-iterator-direct.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";
import call from "../algorithms/call.js";

export function* getIteratorFromMethod(
  obj: StaticJsValue,
  method: StaticJsCallable,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const iterator = yield* call(method, obj);
  if (!isStaticJsObjectLike(iterator)) {
    throw Completion.Throw("TypeError", "Result of the iterator method is not an object");
  }

  return yield* getIteratorDirect(iterator);
}
