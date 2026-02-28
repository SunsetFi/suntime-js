import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

import call from "../algorithms/call.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import { isStaticJsObjectLike, type StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type { IteratorRecord } from "./IteratorRecord.js";

export default function* iteratorNext(
  iteratorRecord: IteratorRecord,
  value: StaticJsValue | null,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  let result: StaticJsValue;
  try {
    if (!value) {
      result = yield* call(iteratorRecord.nextMethod, iteratorRecord.iterator, [], realm);
    } else {
      result = yield* call(iteratorRecord.nextMethod, iteratorRecord.iterator, [value], realm);
    }
  } catch (e) {
    if (Completion.Throw.is(e)) {
      iteratorRecord.done = true;
    }

    throw e;
  }

  if (!isStaticJsObjectLike(result)) {
    iteratorRecord.done = true;
    throw Completion.Throw(
      realm.types.error("TypeError", "Result of iterator next is not an object"),
    );
  }

  return result;
}
