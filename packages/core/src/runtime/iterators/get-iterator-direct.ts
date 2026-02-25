import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type { IteratorRecord } from "./IteratorRecord.js";

export function* getIteratorDirect(obj: StaticJsObjectLike): EvaluationGenerator<IteratorRecord> {
  const nextMethod = yield* obj.getEvaluator("next");
  return {
    iterator: obj,
    nextMethod,
    done: false,
  };
}
