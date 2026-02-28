import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { type StaticJsObjectLike, isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsFunction } from "../types/StaticJsFunction.js";

import { getIteratorDirect } from "./get-iterator-direct.js";
import type { IteratorRecord } from "./IteratorRecord.js";

export default function* getIteratorFromMethod(
  obj: StaticJsObjectLike,
  method: StaticJsFunction,
  realm: StaticJsRealm,
): EvaluationGenerator<IteratorRecord> {
  const iterator = yield* method.callEvaluator(obj);
  if (!isStaticJsObjectLike(iterator)) {
    throw Completion.Throw(
      realm.types.error("TypeError", "Result of the iterator method is not an object"),
    );
  }

  return yield* getIteratorDirect(iterator);
}
