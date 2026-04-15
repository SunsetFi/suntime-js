import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

import { iteratorComplete } from "./iterator-complete.js";
import { iteratorNext } from "./iterator-next.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* iteratorStep(
  iteratorRecord: StaticJsIteratorRecord,
): EvaluationGenerator<StaticJsObject | null> {
  const result = yield* iteratorNext(iteratorRecord, null);
  let done: boolean;
  try {
    done = yield* iteratorComplete(result);
  } catch (e) {
    if (Completion.Throw.is(e)) {
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
