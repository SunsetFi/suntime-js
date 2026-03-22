import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { type StaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import getIteratorDirect from "./get-iterator-direct.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export default function* getIteratorFromMethod(
  obj: StaticJsValue,
  method: StaticJsFunction,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const iterator = yield* method.callEvaluator(obj);
  if (!isStaticJsObjectLike(iterator)) {
    throw Completion.Throw("TypeError", "Result of the iterator method is not an object");
  }

  return yield* getIteratorDirect(iterator);
}
