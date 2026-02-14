import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type { IteratorRecord } from "./IteratorRecord.js";
import { iteratorComplete } from "./iterator-complete.js";
import iteratorNext from "./iterator-next.js";

export default function* iteratorStep(
  iteratorRecord: IteratorRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike | null> {
  const result = yield* iteratorNext(iteratorRecord, null, realm);
  let done: boolean;
  try {
    done = yield* iteratorComplete(result, realm);
  } catch (e) {
    if (e instanceof ThrowCompletion) {
      iteratorRecord.done = true;
    }

    throw e;
  }

  if (done) {
    iteratorRecord.done = true;
    return null;
  }

  return result;
}
