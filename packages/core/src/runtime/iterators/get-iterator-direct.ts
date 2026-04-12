import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { get } from "../algorithms/get.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* getIteratorDirect(
  obj: StaticJsObject,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const nextMethod = yield* get(obj, "next");
  return {
    iterator: obj,
    nextMethod,
    done: false,
  };
}
