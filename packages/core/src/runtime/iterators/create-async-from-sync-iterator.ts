import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { get } from "../algorithms/get.js";
import { StaticJsAsyncFromSyncIterator } from "../types/implementation/objects/StaticJsAsyncFromSyncIterator.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* createAsyncFromSyncIterator(
  syncIteratorRecord: StaticJsIteratorRecord,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const { realm } = EvaluationContext.current;

  const asyncIterator = new StaticJsAsyncFromSyncIterator(realm, syncIteratorRecord);

  const nextMethod = yield* get(asyncIterator, "next");

  return {
    iterator: asyncIterator,
    nextMethod,
    done: false,
  };
}
