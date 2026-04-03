import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { get } from "../algorithms/get.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* getIteratorDirect(
  obj: StaticJsObjectLike,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const nextMethod = yield* get(obj, "next");
  return {
    iterator: obj,
    nextMethod,
    done: false,
  };
}
